import { User } from "../../models/User.Model.js";
import becrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username && !email && !password) {
      res.json({
        success: false,
        message: "provide all the details like (username, email and password)",
      });
    }

    const alreadyEmailRegister = await User.findOne({ email });

    if (alreadyEmailRegister) {
      res.json({
        success: false,
        message: "User already register with this email",
      });
    }
    const alreadyUsernameRegister = await User.findOne({ username });

    if (alreadyUsernameRegister) {
      res.json({
        success: false,
        message:
          "User already register with this username, please try something diffrent username",
      });
    }

    const hashPassword = await becrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    return res.json({
      status: 204,
      success: true,
      message: "user register successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      status: 500,
      success: false,
      message: "Error while register the user",
    });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {

    if (!email && !password) {
      res.json({
        success: false,
        message: "provide all the details like (email and password) for login",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.json({
        success: false,
        message: "user not exists with this email please try to register first",
      });
    }

    const isPasswordCorrect = await becrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.json({
        success: false,
        message: "You entered wrong password! please re enter the correct one",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      process.env.JWT_KEY_ACCESS_TOKEN,
      { expiresIn: "60m" }
    );

    const logedInUser = await User.findById(user._id).select("-password");

    const option = {
      httpOnly: true,
      secure: false,
    };

    res
      .cookie("accessToken", token, option)
      .json({
        status: 200,
        success: true,
        message: "Login successfully",
        data: logedInUser,
        accessToken: token,
      });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 500,
      success: false,
      message: "Error while register the user",
    });
  }
};

//logout
const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .json({ status: 500, success: true, message: "User logout Successfully" });
};

//auth middlerware

export { register, login, logout };
