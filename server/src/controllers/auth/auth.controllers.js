import { User } from "../../models/User.Moduls.js";
import becrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username && !email && !password) {
      res.status(204).json({
        status: false,
        message: "provide all the details like (username, email and password)",
      });
    }

    const alreadyEmailRegister = await User.findOne({email});

    if (alreadyEmailRegister) {
      res.json({
        status: false,
        message: "User already register with this email",
      }); 
    }
    const alreadyUsernameRegister = await User.findOne({username});

    if (alreadyUsernameRegister) {
      res.json({
        status: false,
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
    return res.status(200).json({
      success: true,
      message: "user register successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error while register the user",
    });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) {
      res.status(500).json({
        status: false,
        message: "user not exists with this email please try to register first",
      });
    }

    const isPasswordCorrect = await becrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(500).json({
        status: false,
        message: "You entered wrong password! please re enter the correct one",
      });
    }

    const token = jwt.sign({ id: user._id, role:user.role, email: user.email }, process.env.JWT_KEY_ACCESS_TOKEN, {expiresIn: '60m'});

    const logedInUser = await User.findById(user._id).select("-password");

    const option = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)  
      .cookie("accessToken", token, option)
      .json({ status: true,message: "Login successfully", data: logedInUser, accessToken: token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
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
    .status(200)
    .json({ status: true, message: "User logout Successfully" });
};

//auth middlerware

export { register, login, logout };
