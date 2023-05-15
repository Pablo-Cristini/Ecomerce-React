import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="a">Inicio</Link></li>
                <li><Link to="/Nosotros" className="a">Nosotros</Link></li>
                <li><Link to="#" className="a">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;