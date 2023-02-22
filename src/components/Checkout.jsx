import { useEffect } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"

const Checkout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {orderPrice} = location.state
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 5000)
    },[])
    
    return(
        <div className="checkoutPage">
            <h1>Congratulations🎉<br/> Your order of ₹{orderPrice} has been placed.</h1>
            <i>You will be redirected to the home page in 5 seconds.</i>
            <Link className="btn" to='/'>Click here to go back to the home page.</Link>
        </div>
    )
}

export default Checkout