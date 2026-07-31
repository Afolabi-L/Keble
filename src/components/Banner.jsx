import "../css/Banner.css";
import template from "../assets/template.png"
import appleLogo from "../assets/appleLogo.jpg";
import googlePlay from "../assets/googlePlay.jpg"

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="cta-banner">
                    <h2 className="banner-title">Ready to Own a Piece of Home</h2>
                    <div className="banner-btns">
                        <button type="button" className="banner-btn">
                            <img src={googlePlay} alt="google play" />
                            <p>Download on Playstore</p>
                        </button>
                        <button type="button" className="banner-btn">
                            <img src={appleLogo} alt="app store" />
                            <p>Download on Appstore</p>
                        </button>
                    </div>
                </div>
                <img src={template} alt="banner" className="banner-img" />
            </div>
            
        </>
        
    );
}

export default Banner