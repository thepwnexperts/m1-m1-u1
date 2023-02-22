import { useState, useEffect } from "react";
import axios from "axios";
import "./css/App.css";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export const server = axios.create({
  baseURL: "http://thepwnexperts.com:3001/",
});


function App() {

  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  );
}

export default App;
