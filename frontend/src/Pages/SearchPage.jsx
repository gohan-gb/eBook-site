import React, { useState } from "react";
import { useParams } from "react-router-dom";
import books from "../Data/books";
import Heading from "../Components/Heading";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import SearchBar from "../Components/SearchBar";

const SearchPage = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  const { text } = useParams();

  const searchData = books.filter((item) => {
    return (
      item.title.toLowerCase().includes(search) == text ||
      item.author.toLowerCase().includes(search) == text
    );
  });

  return (
    <>
      <Navbar />

      <div className="bg-[#DCE0D9] font-lora pb-8">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
          <div className="pt-20">
            <SearchBar />
          </div>
          <div className="pt-8 pb-8 flex justify-center items-center">
            <Heading frontText="search result for :" />{" "}
            <h2 className="font-bold text-2xl underline">{` `}</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            {searchData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="m-2 flex flex-col justify-center items-center h-96 w-72 lg:w-60 border-solid border-[#595959]  border-2 rounded-xl pb-8"
                >
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

export default SearchPage;
