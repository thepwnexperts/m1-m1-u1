import { useContext } from "react";
import "../css/App.css";
import { server } from "../App";
import { cartContext } from "../App";

const Products = ({ data }) => {
  const { cart, setCart} = useContext(cartContext);

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
    </div>
  );
};

export default Products;
