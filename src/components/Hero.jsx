import "../css/Hero.css"
import heroImage from "../assets/heroImage.jpg";
import appleLogo from "../assets/appleLogo.jpg";
import googlePlay from "../assets/googlePlay.jpg";

function Hero() {
    return(
        <section className="hero-container">
            <img src={heroImage} alt="hero image" className="hero-img"/>
            <div className="hero-content">
                <h1 className="hero-title">Path to Ownership for Africans</h1>
                <p className="hero-subtitle">Building Wealth, One Property at a Time</p>
                <button className="hero-cta">
                    Download Mobile App
                    <span className="cta-icons">
                        <img src= {appleLogo} alt="apple logo" />
                        <img src= {googlePlay} alt="google Play Store" />
                    </span>
                </button>
            </div>
            
        </section>
    )
}

export default Hero