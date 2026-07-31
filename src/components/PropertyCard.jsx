import "../css/PropertyCard.css";
import listing from "../assets/listing.png";
import nigeria from "../assets/nigeria.png";
import oction from "../assets/oction.jpg";
import octionr from "../assets/octionr.jpg";

function PropertyCard() {
    return(
        
        <div className="property-wrap">
            <div className="card-top">
                <h2 className="wrapheader">Explore opportunities with Keble</h2>
                <div className="property-options">
                    <button type="button"className="option">Buy a land</button>
                    <button type="button"className="option">Own a home</button>
                    <button type="button"className="active option">Own a Fractional</button>
                </div> 
            </div>

            <div className="propertyblock">
                <div className="card">
                    <div className="propertyheader">
                        <img src= {listing} alt="Cambridge RE Bond IV" className="property-img" />
                        <div className="property-title">
                            <h4 className="title">Cambridge RE Bond IV</h4>
                            <div className="location">
                                <span><img src={nigeria} alt="nigeria" className="location-img" /></span>
                                Lagos, Nigeria
                            </div>
                        </div>
                    </div>
                    <div className="propertycontent">
                        <p className="description">We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment</p>
                        <div className="propertystats">
                            <div className="investment stat">
                                <p className="stathead">Min. Investment</p>
                                <h4 className="price">₦100,00.00</h4>
                            </div>
                            <div className="returns stat">
                                <p className="stathead">Returns</p>
                                <p className="rate">25%</p>
                            </div>
                            <div className=" stat">
                                <p className="stathead">Status</p>
                                <p className="status">Active</p>
                            </div>
                        </div>
                        <hr />
                        <button type="button" className="property-cta">Invest</button>
                    </div>

                </div>
                <div className="card">
                    <div className="propertyheader">
                        <img src= {listing} alt="Cambridge RE Bond IV" className="property-img" />
                        <div className="property-title">
                            <h4 className="title">Cambridge RE Bond IV</h4>
                            <div className="location">
                                <span><img src={nigeria} alt="nigeria" className="location-img" /></span>
                                Lagos, Nigeria
                            </div>
                        </div>
                    </div>
                    <div className="propertycontent">
                        <p className="description">We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment</p>
                        <div className="propertystats">
                            <div className="investment stat">
                                <p className="stathead">Min. Investment</p>
                                <h4 className="price">₦100,00.00</h4>
                            </div>
                            <div className="returns stat">
                                <p className="stathead">Returns</p>
                                <p className="rate">25%</p>
                            </div>
                            <div className=" stat">
                                <p className="stathead">Status</p>
                                <p className="status">Active</p>
                            </div>
                        </div>
                        <hr />
                        <button type="button" className="property-cta">Invest</button>
                    </div>
                </div>

                <div className="card">
                    <div className="propertyheader">
                        <img src= {listing} alt="Cambridge RE Bond IV" className="property-img" />
                        <div className="property-title">
                            <h4 className="title">Cambridge RE Bond IV</h4>
                            <div className="location">
                                <span><img src={nigeria} alt="nigeria" className="location-img" /></span>
                                Lagos, Nigeria
                            </div>
                        </div>
                    </div>
                    <div className="propertycontent">
                        <p className="description">We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment</p>
                        <div className="propertystats">
                            <div className="investment stat">
                                <p className="stathead">Min. Investment</p>
                                <h4 className="price">₦100,00.00</h4>
                            </div>
                            <div className="returns stat">
                                <p className="stathead">Returns</p>
                                <p className="rate">25%</p>
                            </div>
                            <div className=" stat">
                                <p className="stathead">Status</p>
                                <p className="status">Active</p>
                            </div>
                        </div>
                        <hr />
                        <button type="button" className="property-cta">Invest</button>
                    </div>
                </div>
            </div>

            <div className="slider-nav">
                <button type="button">
                    <img src= {oction} alt="" className="left" />
                </button>
                <div className="terminal">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                
                <button type="button">
                    <img src= {octionr} alt="" className="right" />
                </button>
            </div>
        </div>
            

    )
};

export default PropertyCard