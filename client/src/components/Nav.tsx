import logo from '../../../imgIcon/Logo.png';
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <header>
            <div className="logo">
                 <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>

                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                    <li><NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>Admin</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;