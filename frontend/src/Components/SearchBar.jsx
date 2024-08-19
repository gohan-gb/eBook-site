import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import books from "../Data/books";



const SearchBar = () => {

    const [search, setSearch] = useState('')

    const handleSearch = (event ) => {
        setSearch(event.target.value)
    }
    console.log(search);
    
  return (
    <>
    <div className="font-lora flex justify-center items-center">
      <input
        onChange={handleSearch}
        className=" h-12 min-w-[75%] border-[#808F85] rounded-sm p-2 border-2 border-solid active:"
        type="search"
        placeholder="Search for a book"
      />

      <button className="border-2 border-solid border-[#808F85] active:border-white rounded-sm ml-px">
        <CiSearch color="#595959" size="42px" />
      </button>
    </div>
    {
        search && <div className="flex flex-col justify-center items-center">
        {
            books.filter((item)=> {
                return item.title.toLowerCase().includes(search) || item.author.toLowerCase().includes(search)
            }).
            map((item)=>{
                return <div className="bg-white min-w-[50%] p-2 border border-[#DCE0D9] border-solid">

                    <div className="flex justify-evenly items-center">
                        <img className="h-20" src={item.imageUrl} alt="book-image" />
                        <section>
                        <h1>{item.title}</h1>
                        <h1>{item.author}</h1>
                        </section>
                    </div>
                </div>
            })
        }
    </div>
    }
    </>
  );
};

export default SearchBar;
