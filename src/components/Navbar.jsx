import kebleLogo from "../assets/kebleLogo.svg"
import "../css/Navbar.css";
function Navbar(){
    return (
        <header> 
            <nav className="navbar">
                <img src= {kebleLogo} alt="Keble" className="logo" />
                <ul className="navlist">
                    <li><a href="#" className="navitem">Fractional Ownership</a></li>
                    <li><a href="#" className="navitem">Own a Home</a></li>
                    <li><a href="#" className="navitem">Buy a Land</a></li>
                    <li><a href="#" className="navitem">Leader Board</a></li>
                    <li><a href="#" className="navitem">Listings</a></li>
                    <li><a href="#" className="navitem">Resources</a></li>
                </ul>
            </nav>

            <div className="btns">
                <button type="button" className="login">Log In</button>
                <button type="button" className="signup">Sign Up</button>
            </div>
        </header>
        
    )
}

export default Navbar