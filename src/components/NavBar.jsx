import '../css/App.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav className="navbar">
                <p>PWN Experts</p>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;