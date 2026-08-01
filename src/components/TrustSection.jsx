// import "../css/TrustSection.css";
import TrustCard from "./TrustCard";

import trustIcon1 from "../assets/trustIcon1.jpg";
import trustIcon2 from "../assets/trustIcon2.jpg";
import trustIcon3 from "../assets/trustIcon3.jpg";
import trustIcon4 from "../assets/trustIcon4.jpg";

const trustData = [
    {
        id: 1,
        icon: trustIcon1,
        alt: "flexible ownership",
        title: "Flexible Ownership",
        description: "Start your journey to owning your dream property with just 10% down, and enjoy flexible 5-year installment plans making it easier to build wealth and achieve a lasting legacy.",
    },
    {
        id: 2,
        icon: trustIcon2,
        alt: "secured investments",
        title: "Secured Investments",
        description: "Own with confidence. Each property is rigorously vetted and comes with a Certificate of Occupancy or equivalent, guaranteeing your investment is secure and legally protected.",
    },
    {
        id: 3,
        icon: trustIcon3,
        alt: "monetize your property",
        title: "Monetize Your Property",
        description: "With Keble, you are not just investing in property. You are maximising your returns, earning up to 2x more rental income and higher capital appreciation compared to anywhere else.",
    },
    {
        id: 4,
        icon: trustIcon4,
        alt: "rooted in Africa",
        title: "Rooted in Africa",
        description: "Access global real estate expertise and deep knowledge of African markets with Keble. From navigating property laws to offering neighbourhood insights, we're here to guide you every step.",
    },
];

function TrustSection() {
    return (
        <div className="trustSection">
            <h2 className="sectionHead">Build Trust with Every Property</h2>
            <div className="grid-container">
                {trustData.map((item) => (
                    <TrustCard
                        key={item.id}
                        icon={item.icon}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrustSection;