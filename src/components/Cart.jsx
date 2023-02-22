import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import { useState } from "react";
import { server } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, cart, setCart } = useContext(DataContext);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(()=>{
    server.post('/cal',{
        id: cart
    })
    .then(res=>{
        setOrderPrice(res.data.totalPrice)
    })
    .catch(err=>console.log(err))
  })

  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item !== id);
    });
  };

  return (
    <div style={{textAlign: "center"}}>
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <div className="productList">
          {data.map((item) => {
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
                    <p>₹{item.price}</p>
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
          })}
          <h2>Total Amount: ₹{orderPrice}</h2>
          <Link className="btn checkoutBtn" to='/checkout' state={{orderPrice: orderPrice}}>Place Order</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
