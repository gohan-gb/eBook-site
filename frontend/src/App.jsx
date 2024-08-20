import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Home from "./Pages/Home/Home";
import AllBooks from "./Pages/AllBooks";
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import User from "./Pages/User"
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/all-books" Component={AllBooks}></Route>
        <Route path="/log-in" Component={LogIn} ></Route>
        <Route path="/sign-up" Component={SignUp}></Route>
        <Route path="/user" Component={User}></Route>
        <Route path="/search/:search" Component={SearchPage}></Route>

      </Routes>
    </>
  );
}

export default App;
