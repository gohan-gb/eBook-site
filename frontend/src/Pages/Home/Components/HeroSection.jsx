import React from "react";
import Button from '../../../Components/Button'

const Home = () => {
  return (
    <div className="bg-[#DCE0D9] ">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-64 flex flex-col sm:flex-row sm:items-center sm:justify-between items-center">
        <div className="w-96">
          <p className="font-lora mt-20 text-2xl mb-4 text-center sm:text-justify">
            Get, <span className="font-bold text-[#6B0F1A]">Upload</span> and
            Share your Favorite eBooks
          </p>
          <p className="font-lora mb-4 text-center sm:text-justify">
            Welcome to eBookLibs, your ultimate destination for eBooks! 
            Dive into a vast collection of genres, from gripping mysteries to
            heartwarming romances, and discover new authors and timeless
            classics. <br />
            
          </p>
          <div className="mb-8 flex justify-center sm:justify-start">
          <Button width='135px' text="Explore books" />
          </div>
        </div>
        <img
          className="w-80 sm:w-96 sm:mt-20 mb-8 ml-0 sm:ml-8"
          src="https://media1.tenor.com/m/ig-VXmFIt2wAAAAC/aesthetic-anime.gif"
          alt="book-gif"
        />
      </div>
    </div>
  );
};

export default Home;
