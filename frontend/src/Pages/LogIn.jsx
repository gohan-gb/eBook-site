import React from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#DCE0D9] font-lora ">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64 ">
        <div className="max-w-full border border-solid border-black p-16 flex justify-center items-center flex-col">
          <input
            className="h-16 rounded-md p-2 border border-solid border-[#31081f]"
            type="email"
            placeholder="your@email.com"
          />
          <br />
          <input
            className="h-16 rounded-md p-2 border border-solid border-[#31081f]"
            type="password"
            placeholder="enter your password"
          />{" "}
          <br />
          <Button width="120px" text="Log in" />
          <div>
            New user?{" "}
            <Link className="underline text-[#31081F]" to="/sign-up">
              {" "}
              SignUp{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
