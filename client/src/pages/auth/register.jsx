import CommonForm from "@/components/common/form";
import { registerFormControllers } from "@/config";
import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: ""
}

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e)=>{  
    e.preventDefault()
    dispatch(registerUser(formData)).then((data)=>{
      console.log(data)
      if (data.payload.success == true) {
        navigate("/auth/login")
      }
    })
  }

  console.log(formData);
  

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">
          Already have an account 
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/login"}
          >
            Login Here
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControllers}
        buttonText={'Register'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
