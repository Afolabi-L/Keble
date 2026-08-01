function PropertyCard({ image, title, location, locationFlag, description, minInvestment, returns, status }) {
    return (
        <div className="card">
            <div className="propertyheader">
                <img src={image} alt={title} className="property-img" />
                <div className="property-title">
                    <h4 className="title">{title}</h4>
                    <div className="location">
                        <span><img src={locationFlag} alt={location} className="location-img" /></span>
                        {location}
                    </div>
                </div>
            </div>
            <div className="propertycontent">
                <p className="description">{description}</p>
                <div className="propertystats">
                    <div className="investment stat">
                        <p className="stathead">Min. Investment</p>
                        <h4 className="price">{minInvestment}</h4>
                    </div>
                    <div className="returns stat">
                        <p className="stathead">Returns</p>
                        <p className="rate">{returns}</p>
                    </div>
                    <div className="stat">
                        <p className="stathead">Status</p>
                        <p className="status">{status}</p>
                    </div>
                </div>
                <hr />
                <button type="button" className="property-cta">Invest</button>
            </div>
        </div>
    );
}

export default PropertyCard;