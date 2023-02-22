import { useState, useEffect } from "react";
import axios from "axios";
import "./css/App.css";
import { createContext } from "react";
import Products from "./components/Products";
import NavBar from "./components/NavBar";

export const server = axios.create({
  baseURL: "http://thepwnexperts.com:3001/",
});

export const cartContext = createContext();

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

  const showCart = () => {
    server
      .post("/cal", { id: cart })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <cartContext.Provider value={{cart, setCart}}>
      <NavBar />
      {/* <button onClick={showCart}>Show Cart</button> */}
      <Products data={data} />
      <div className="loadMoreLink"><a onClick={(e) => {e.preventDefault(); setPage((prev) => prev + 1)}}>Load more...</a></div>
    </cartContext.Provider>
  );
}

export default App;
