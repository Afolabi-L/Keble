import "../css/OwnershipShowcase.css";
import mockup1 from "../assets/mockup1.jpg";
import mockup2 from "../assets/mockup2.jpg";
import mockup3 from "../assets/mockup3.jpg";
import ShowcaseCard from "./ShowcaseCard";

const showcaseData = [
    {
        id: 1,
        title: "Home Ownership",
        description: "Own a home in Nigeria, Dubai or in London with just 10% down and flexible payment plans over 5+ years.",
        ctaText: "Find your dream home today",
        image: mockup1,
        reverse: false,
    },
    {
        id: 2,
        title: "Land Ownership",
        description: "Own titled land in prime locations build a legacy that lasts a lifetime and secure valuable property.",
        ctaText: "Own a plot where it matters",
        image: mockup2,
        reverse: true,
    },
    {
        id: 3,
        title: "Fractional Ownership",
        description: "Own a piece and earn 10%-30% yearly from properties in Nigeria, Dubai and London.",
        ctaText: "Own a piece of global assets",
        image: mockup3,
        reverse: false,
    },
];

function Showcase() {
    return (
        <div className="wrap">
            <h2 className="wrap-title">Dream. Own. Invest in Global Properties</h2>
            <div className="showcases">
                {showcaseData.map((item) => (
                    <ShowcaseCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        ctaText={item.ctaText}
                        image={item.image}
                        reverse={item.reverse}
                    />
                ))}
            </div>
        </div>
    );
}

export default Showcase;