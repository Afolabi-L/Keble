import "../css/SecurityProviders.css";
import provider1 from "../assets/provider1.jpg"
import provider2 from "../assets/provider2.jpg"
import provider3 from "../assets/provider3.jpg"
import provider4 from "../assets/provider4.jpg"

function SecurityProviders(){
    return (
    
        <div className="container">
            <p className="title">Our Security Providers</p>
            <ul className="providerList">
                <li className="providers"><img src={provider1} alt="Deloitte" /></li>
                <li className="providers"><img src={provider2} alt="EY" /></li>
                <li className="providers"><img src={provider3} alt="Redan" /></li>
                <li className="providers"><img src={provider4} alt="SCUML" /></li>
            </ul>
        </div>
        
    )
}

export default SecurityProviders