import arrow from "../assets/arrow.jpg";

function ShowcaseCard({ title, description, ctaText, image, reverse }) {
    return (
        <div className={reverse ? "reverse-showcase showcase" : "showcase"}>
            <div className="showcase-content">
                <div className="showcase-title">{title}</div>
                <div className="showcase-description">{description}</div>
                <button type="button" className="cta-btn">
                    <p>{ctaText}</p>
                    <span><img src={arrow} alt="button" /></span>
                </button>
            </div>
            <img src={image} alt="" className="showcase-image" />
        </div>
    );
}

export default ShowcaseCard;