import kebleLogo from "../assets/kebleLogo.svg";
import "../css/Navbar.css";
import NavItem from "./NavItem";

const navLinks = [
    { id: 1, label: "Fractional Ownership", href: "#" },
    { id: 2, label: "Own a Home", href: "#" },
    { id: 3, label: "Buy a Land", href: "#" },
    { id: 4, label: "Leader Board", href: "#" },
    { id: 5, label: "Listings", href: "#" },
    { id: 6, label: "Resources", href: "#" },
];

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <img src={kebleLogo} alt="Keble" className="logo" />
                <ul className="navlist">
                    {navLinks.map((link) => (
                        <NavItem key={link.id} label={link.label} href={link.href} />
                    ))}
                </ul>
            </nav>

            <div className="btns">
                <button type="button" className="login">Log In</button>
                <button type="button" className="signup">Sign Up</button>
            </div>
        </header>
    );
}

export default Navbar;