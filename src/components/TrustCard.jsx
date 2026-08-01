import "../css/TrustSection.css";

function TrustCard({ icon, alt, title, description }) {
    return (
        <div className="grid-block">
            <img src={icon} alt={alt} className="trustIcon" />
            <h2 className="sectionTitle">{title}</h2>
            <p className="sectionDescription">{description}</p>
        </div>
    );
}

export default TrustCard;