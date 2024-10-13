import CommonForm from "@/components/common/form";
import { loginFormControllers } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: ""
}

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState)

  const onSubmit = ()=>{

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login To Your Account
        </h1>
        <p className="mt-2">
          Don't have an account 
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/register"}
          >
            Register Here
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControllers}
        buttonText={'Login'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
