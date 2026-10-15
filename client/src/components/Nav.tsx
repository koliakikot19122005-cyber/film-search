import logo from '../../../imgIcon/Logo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Nav() {

    const mode = useSelector((state: any) => state.app.mode);
    const isLoggedIn = useSelector((state: any) => state.app.isloggedIn);
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
                    |
                   {isLoggedIn ? (
                        <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink></li>
                    ) : (
                        <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></li>
                    )}
                    {mode === 'admin' && (
                        <li><NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>Admin</NavLink></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;