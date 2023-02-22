import { useContext } from "react";
import { DataContext } from "../App";

const Cart = () => {
  const { data, cart, setCart } = useContext(DataContext);

  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item !== id);
    });
  };

  return (
    <div className="productList">
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        data.map((item) => {
          return (
            cart.includes(item.id) && (
              <div className="productCard" key={item._id}>
                <img
                  className="productImage"
                  src={item.image}
                  alt={item.name}
                />
                <div className="productDetails">
                  <h3>{item.name}</h3>
                  <p>₹ {item.price}</p>
                </div>
                <a
                  href=""
                  className="addToCart"
                  style={{ color: cart.includes(item.id) ? "red" : "black" }}
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(item.id);
                  }}
                >
                  ♡
                </a>
              </div>
            )
          );
        })
        
      )}
    </div>
  );
};

export default Cart;
