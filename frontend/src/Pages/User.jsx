import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const User = () => {
  return (
    <div className="bg-[#DCE0D9] font-lora py-8 h-[100vh]">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
        <div className="min-w-full border border-solid border-black p-16 flex flex-col justify-center items-start">
            <label htmlFor="pdf">Select the eBook file:</label>
          <input type="file" accept="pdf/*" name="" id="" /> <br />
          <label for="thumbnail">Upload a thumbnail:</label>
          <input type="file" accept="image/*" /> <br />
          <input
            className="h-16 rounded-md p-2 min-w-[335px] border border-solid border-[#31081f]"
            type="email"
            placeholder="enter ebook name"
          />{" "}
          <br />
          <input
            className="h-16 rounded-md p-2 min-w-[335px] border border-solid border-[#31081f]"
            type="email"
            placeholder="category"
          /> <br />
          <Button width="120px" text="Upload" />
        </div>
      </div>
    </div>
  );
};

export default User;
