import React from "react";

const Home = () => {
  return (
    <div className="bg-[#DCE0D9] ">
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-32 flex flex-col sm:flex-row sm:items-center sm:justify-between items-center">
        <p className="font-lora mt-20 text-2xl mb-8 text-center">
          Get, <span className="font-bold text-[#6B0F1A]">Upload</span> and
          Share your Favorite eBooks
        </p>
        <img
          className="w-80 sm:mt-20 mb-8"
          src="https://media1.tenor.com/m/ig-VXmFIt2wAAAAC/aesthetic-anime.gif"
          alt="book-gif"
        />
      </div>
    </div>
  );
};

export default Home;
