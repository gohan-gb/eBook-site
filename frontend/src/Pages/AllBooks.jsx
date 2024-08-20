import React from "react";
import books from "../Data/books";
import Heading from "../Components/Heading";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Button from "../Components/Button";
import SearchBar from "../Components/SearchBar";

const AllBooks = () => {
  return (<>
  <Navbar/>
  
    <div className="bg-[#DCE0D9] font-lora pb-8">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
      <div className="pt-20"><SearchBar/> </div>
        <div className="pt-8 pb-8 flex justify-center items-center">
        
          <Heading frontText="Read Books for" span="Free" />
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {books.map((item, index) => {
            return (
              <div key={index} className="my-4 mx-px sm:m-2 flex flex-col justify-center items-center min-h-32 w-24 sm:h-96 sm:w-72 lg:w-60 border-solid border-[#595959]  border-2 rounded-xl p-1 sm:pb-8">
                <img
                  src={item.imageUrl}
                  className="sm:p-4 mt-2 p-0 max-h-20  sm:max-h-60"
                  alt="book-cover"
                />
          
                  <span className="text-center text-xs sm:text-lg font-semibold">{item.title}</span>
                
                <h4 className="hidden sm:block">
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
