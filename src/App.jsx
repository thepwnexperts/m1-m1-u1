import { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./css/App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export const DataContext = createContext();

export const server = axios.create({
  baseURL: "http://thepwnexperts.com:3000/",
});


function App() {

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getDataController = new AbortController();
    server
      .get(`/p/${page}`, { signal: getDataController.signal })
      .then((res) => {
        res.data?.test.map((item) => {
          setData((prev) => {
            if (prev.includes(item)) return prev;
            else return [...prev, item];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => getDataController.abort();
  }, [page]);

  return (
    <DataContext.Provider value={{data, cart, setCart, setPage}}>
      <NavBar />
      <Outlet/>
    </DataContext.Provider>
  );
}

export default App;
