import "../css/TrustSection.css";

import trustIcon1 from "../assets/trustIcon1.jpg";
import trustIcon2 from "../assets/trustIcon2.jpg";
import trustIcon3 from "../assets/trustIcon3.jpg";
import trustIcon4 from "../assets/trustIcon4.jpg";

function TrustSection() {
    return(
        
        <div className="trustSection">
            <h2 className="sectionHead">Build Trust with Every Property</h2>
            <div className="grid-container">
                <div className="grid-block">
                    <img src= {trustIcon1} alt="flexible ownership" className="trustIcon" />
                    <h2 className="sectionTitle">Flexible Ownership</h2>
                    <p className="sectionDescription">Start your journey to owning your dream property with just 10% down, and enjoy flexible 5-year installment plans making it easier to build wealth and achieve a lasting legacy.</p>
                </div>
                <div className="grid-block">
                    <img src= {trustIcon2} alt="secured investments" className="trustIcon" />
                    <h2 className="sectionTitle">Secured Investments</h2>
                    <p className="sectionDescription">Own with confidence. Each property is rigorously vetted and comes with a Certificate of Occupancy or equivalent, guaranteeing your investment is secure and legally protected.</p>
                </div>
                <div className="grid-block">
                    <img src= {trustIcon3} alt="monetize your property" className="trustIcon" />
                    <h2 className="sectionTitle">Monetize Your Property</h2>
                    <p className="sectionDescription">With Keble, you are not just investing in property. You are maximising your returns, earning up to 2x more rental income and higher capital appreciation compared to anywhere else.</p>
                </div>
                <div className="grid-block">
                    <img src= {trustIcon4} alt="rooted in Africa" className="trustIcon" />
                    <h2 className="sectionTitle">Rooted in Africa</h2>
                    <p className="sectionDescription">Access global real estate expertise and deep knowledge of African markets with Keble. From navigating property laws to offering neighbourhood insights, we’re here to guide you every step.</p>
                </div>
            </div>
        </div>
        
    )
}

export default TrustSection