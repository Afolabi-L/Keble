import "../css/OwnershipShowcase.css";
import mockup1 from "../assets/mockup1.jpg";
import mockup2 from "../assets/mockup2.jpg";
import mockup3 from "../assets/mockup3.jpg";
import arrow from "../assets/arrow.jpg"
function OwnershipShowcase() {
    return (
        
        <div className="wrap">
            <h2 className="wrap-title">Dream. Own. Invest in Global Properties</h2>
            <div className="showcases">
                <div className="showcase">
                    <div className="showcase-content">
                        <div className="showcase-title">Home Ownership</div>
                        <div className="showcase-description">Own a home in Nigeria, Dubai or in London with just 10% down and flexible payment plans over 5+ years.</div>
                        <button type="button" className="cta-btn">
                            <p>Find your dream home today</p>
                            <span><img src={arrow} alt="button" /></span>
                        </button>
                    </div>
                    <img src={mockup1} alt="" className="showcase-image" />
                </div>

                <div className="reverse-showcase showcase">
                    <div className="showcase-content">
                        <div className="showcase-title">Land Ownership</div>
                        <div className="showcase-description">Own titled land in prime locations build a legacy that lasts a lifetime and secure valuable property.</div>
                        <button type="button" className="cta-btn">
                            <p>Own a plot where it matters</p>
                            <span><img src={arrow} alt="button" /></span>
                        </button>
                    </div>
                    <img src={mockup2} alt="" className="showcase-image" />
                </div>
                
                <div className="showcase">
                    <div className="showcase-content">
                        <div className="showcase-title">Fractional Ownership</div>
                        <div className="showcase-description">Own a piece and earn 10%-30% yearly from properties in Nigeria, Dubai and London.</div>
                        <button type="button" className="cta-btn">
                            <p>Own a piece of global assets</p>
                            <span><img src={arrow} alt="button" /></span>
                        </button>
                    </div>
                    <img src={mockup3} alt="" className="showcase-image" />
                </div>
            </div>
        </div>
        
    )
}

export default OwnershipShowcase