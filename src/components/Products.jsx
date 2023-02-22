import { useState, useEffect } from "react";
import "../css/App.css";
import { server } from "../App";

const Products = () => {
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

  const addToCart = (id) => {
    setCart((prev) => {
      if (prev.includes(id)) return prev;
      else return [...prev, id];
    });
  };

  return (
    <div className="productList">
      {data.map((item) => {
        return (
          <div className="productCard" key={item._id}>
            <img className='productImage' src={item.image} alt={item.name} />
            <div className="productDetails">
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
            </div>
            <a
              href=''
              className="addToCart"
              style={{ color: cart.includes(item.id) ? "red" : "black" }}
              onClick={(e) => {
                e.preventDefault();
                addToCart(item.id);
              }}
            >
              ♡
            </a>
          </div>
        );
      })}
      <div className="loadMoreLink"><a onClick={(e) => {e.preventDefault(); setPage((prev) => prev + 1)}}>Load more...</a></div>
    </div>
  );
};

export default Products;
