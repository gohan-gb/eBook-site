import React from "react";
import books from "../Data/books";
import Heading from "../Components/Heading";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Button from "../Components/Button";

const AllBooks = () => {
  return (<>
  <Navbar/>
    <div className="bg-[#DCE0D9] font-lora pb-8">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
        <div className="pt-20 pb-8 flex justify-center items-center">
          <Heading frontText="Read Books for" span="Free" />
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {books.map((item) => {
            return (
              <div className="m-2 flex flex-col justify-center items-center h-96 w-72 lg:w-60 border-solid border-[#595959]  border-2 rounded-xl pb-8">
                <img
                  src={item.imageUrl}
                  className="p-4 max-h-60"
                  alt="book-cover"
                />
                <h3>
                  Book name: <br />
                  <span className="font-semibold">{item.title}</span>
                </h3>
                <h4>
                  Author: <br />
                  <span className="font-semibold">{item.author}</span>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AllBooks;
