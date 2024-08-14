import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Home from "./Pages/Home/Home";
import AllBooks from "./Pages/AllBooks";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/all-books" Component={AllBooks}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
