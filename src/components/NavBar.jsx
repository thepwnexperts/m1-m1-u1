import '../css/App.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav className="navbar">
                <p className='btn'>PWN Experts</p>
                <ul>
                    <li><Link className='btn' to={'/'}>Home</Link></li>
                    <li><Link className='btn' to={'/cart'}>Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;