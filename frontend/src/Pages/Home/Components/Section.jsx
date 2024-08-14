import React from "react";
import Heading from "../../../Components/Heading";
import data from "../../../Data/displayBooks";

const Section = () => {
  return (
    <div className="bg-[#DCE0D9] font-lora pb-8">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64">
        <div className="mb-8">
          <Heading frontText="Last Week's" span="Top" backText="Picks" />
        </div>

        <section className="min-w-72 bg-[#595959] rounded-sm py-8 px-12 text-[#DCE0D9] ">
          <div className="flex flex-wrap justify-center gap-4 columns-2 sm:columns-4 ">
            {data.map((item) => {
              return (
                <section className="">
                  <img src={item.imageUrl} alt="book-image" className=" sm:max-w-48 h-56" />
                  <h1 className="font-bold text-center">Title: {item.title}</h1>
                  <h1 className="font-bold text-center">Author: {item.author}</h1>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section;
