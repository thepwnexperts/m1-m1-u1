import "../css/App.css";
import { useContext } from "react";
import { DataContext } from "../App";

const Products = () => {
  const { data, cart, setCart, setPage } = useContext(DataContext);

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
              <p>₹{item.price}</p>
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
      <div className="loadMoreLink btn"><a onClick={(e) => {e.preventDefault(); setPage((prev) => prev + 1)}}>Load more...</a></div>
    </div>
  );
};

export default Products;
