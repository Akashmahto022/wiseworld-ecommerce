import CommonForm from "@/components/common/form";
import { registerFormControllers } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: ""
}

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState)
  
  const onSubmit = ()=>{

  }

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
