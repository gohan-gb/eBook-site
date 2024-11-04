import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../../Components/Button"
import Navbar from "../../Common/Navbar"
import Footer from "../../Common/Footer"

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("imgUrl", data.imgUrl[0]);

    try {
      const response = await axios.post(
        "http://localhost:8080/books/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Book added successfully:", response.data);
    } catch (error) {
      alert("error adding book", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#DCE0D9] font-lora pb-8">
        <div className="pt-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-4 mb-4">
              <label htmlFor="title"> Title: </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
              />
              {errors.title && <p> book title is mandatory </p>}
            </div>
          

          
            <div className="mb-4">
              <label htmlFor="author"> author: </label>
              <input
                type="text"
                id="author"
                {...register("author", { required: true })}
              />
              {errors.author && <p> book's author name is mandatory </p>}
            </div>
          

          
            <div className="mb-4">
              <label htmlFor="imgUrl"> imgUrl: </label>
              <input
                type="file"
                id="imgUrl"
                accept="image/*"
                {...register("imgUrl", { required: true })}
              />
              {errors.imgUrl && <p> book's image is mandatory to upload</p>}
            </div>
             <Button text='submit' width='120px' type="submit" />
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Admin;
