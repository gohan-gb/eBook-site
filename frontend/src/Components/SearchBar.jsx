import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import books from "../Data/books";
import { Link } from "react-router-dom";
import { useRef } from "react";

const SearchBar = () => {
  
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  console.log(search);

  return (
    <>
      <div className="font-lora flex justify-center items-end ">
        <input
          onChange={handleSearch}
          className=" h-12 min-w-[75%] border-[#808F85] rounded-sm p-2 border-2 border-solid active:"
          type="search"
          placeholder="Search for a book"
        />

        <Link to >
        <button className="border-2 border-solid border-[#808F85] active:border-white rounded-sm ml-px">
          <CiSearch color="#595959" size="36px" />
        </button>
        </Link>
      </div>
      {search && (
        <div className="absolute left-[25%] right-[25%] margin-auto opacity-90">
          {books
            .filter((item) => {
              return (
                item.title.toLowerCase().includes(search) ||
                item.author.toLowerCase().includes(search)
              );
            })
            .map((item, index) => {
              return (
                <div key={index} className="bg-white min-w-[50%] p-2 border border-[#DCE0D9] border-solid">
                  <div className="flex justify-between items-center">
                    <img
                      className="h-20"
                      src={item.imageUrl}
                      alt="book-image"
                    />
                    <section>
                      <h1>{item.title}</h1>
                      <h1>{item.author}</h1>
                    </section>
                  </div>
                </div>
              );
            }).slice(0, 5)}
        </div>
      )}
    </>
  );
};
export default SearchBar;
