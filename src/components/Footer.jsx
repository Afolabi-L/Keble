import "../css/Footer.css"
import kebleLogo from "../assets/kebleLogo.svg"
import twitterIcon from "../assets/twitterIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={kebleLogo} alt="keble" className="keblelogo" />
                        <div className="social-links">
                            <img src={twitterIcon} alt="twitter" className="nav-icon" />
                            <img src={instagramIcon} alt="instagram" className="nav-icon" />
                            <img src={linkedinIcon} alt="linkedin" className="nav-icon" />
                            <img src={facebookIcon} alt="facebook" className="nav-icon" />
                        </div>
                    </div>

                    <div className="services">
                        <div className="legal service">
                            <p className="service-head">Legal</p>
                            <p className="service-content">Terms and Conditions</p>
                            <p className="service-content">Privacy Policy</p>
                            <p className="service-content">Disclaimer</p>
                        </div>
                        <div className="contact service">
                            <p className="service-head">Contact</p>
                            <p className="service-content">Hello@keble.co</p>
                        </div>
                    </div>
                </div>

                <div className="about-info">
                    <p className="footer-content">Keble is a duly registered company of the Corporate Affairs Commission, Nigeria and State of Delaware, United States. Keble offers Real Estate investment opportunities for a fraction of its cost in developed markets like the United Kingdom and United States of America. Members of the platform get to earn stable returns in USD and achieve their financial goals faster.</p>
                    <div className="disclaimer">
                        <p className="content-top footer-content">For Safety Investments and Accountability: </p>
                        <span className="footer-content">We have a professional engagement through a trusteeship agreement with Meristem Trustees Limited. We also have obtained a SCMUL License To remain in compliance with the provisions of the Money Laundering (Prohibition) Act, 2004.</span>
                    </div>
                    <p className="footer-content">By using the Platform, you accept our Terms of Service and Privacy Policy. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections might not reflect actual future performance. 
                    All securities involve risk and may result in partial or total loss. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties.</p>
                    <small className="footer-content">© 2025 Keble Inc. All Rights Reserved. Google Play and the Google Play logo are registered trademarks of Google LLC. Apple, the Apple logo, and iPhone are registered trademarks of Apple Inc.</small>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer