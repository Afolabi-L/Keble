import "../css/PropertyCard.css";
import listing from "../assets/listing.png";
import nigeria from "../assets/nigeria.png";
import oction from "../assets/oction.jpg";
import octionr from "../assets/octionr.jpg";
import PropertyCard from "./PropertyCard";
import FilterButton from "./FilterButton";

const filterOptions = [
    { id: 1, label: "Buy a land", active: false },
    { id: 2, label: "Own a home", active: false },
    { id: 3, label: "Own a Fractional", active: true },
];

const propertyData = [
    {
        id: 1,
        image: listing,
        title: "Cambridge RE Bond IV",
        location: "Lagos, Nigeria",
        locationFlag: nigeria,
        description: "We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment",
        minInvestment: "₦100,00.00",
        returns: "25%",
        status: "Active",
    },
    {
        id: 2,
        image: listing,
        title: "Cambridge RE Bond IV",
        location: "Lagos, Nigeria",
        locationFlag: nigeria,
        description: "We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment",
        minInvestment: "₦100,00.00",
        returns: "25%",
        status: "Active",
    },
    {
        id: 3,
        image: listing,
        title: "Cambridge RE Bond IV",
        location: "Lagos, Nigeria",
        locationFlag: nigeria,
        description: "We present a compelling investment oppotunity to acquire and refurbish a portfolio of 12 residential apartment",
        minInvestment: "₦100,00.00",
        returns: "25%",
        status: "Active",
    },
];

function PropertyShowcase() {
    return (
        <div className="property-wrap">
            <div className="card-top">
                <h2 className="wrapheader">Explore opportunities with Keble</h2>
                <div className="property-options">
                    {filterOptions.map((option) => (
                        <FilterButton key={option.id} label={option.label} active={option.active} />
                    ))}
                </div>
            </div>

            <div className="propertyblock">
                {propertyData.map((property) => (
                    <PropertyCard
                        key={property.id}
                        image={property.image}
                        title={property.title}
                        location={property.location}
                        locationFlag={property.locationFlag}
                        description={property.description}
                        minInvestment={property.minInvestment}
                        returns={property.returns}
                        status={property.status}
                    />
                ))}
            </div>

            <div className="slider-nav">
                <button type="button">
                    <img src={oction} alt="" className="left" />
                </button>
                <div className="terminal">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <button type="button">
                    <img src={octionr} alt="" className="right" />
                </button>
            </div>
        </div>
    );
}

export default PropertyShowcase;