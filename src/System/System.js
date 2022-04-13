import "./System.css";
import backButton from "../images/Button Back.png";
import { Link } from "react-router-dom";
import pulse from "../images/systempulse.png";


const System = () => {
    return (
        <>
            <div className="System-header">
                {/* Making back button that lead user back to dashboard */}

                <div className="BackButton">
                    <Link to="/dashboard"><img src={backButton} width="44" height="44"/></Link>
                </div>
                {/* Making header title and image also showing device location using api divide section with flexbox */}

                <div className="SystemStatus-FlexContainer">
                    <div className="SystemStatus-Title">
                        <p>System Status</p>
                    </div>

                    <div className="SystemStatus-Image">
                        <img src={pulse} width="60" height="60"/>
                    </div>
                </div>

                <div className="SystemStatus-Location">Sansai, Chiang Mai, Thailand</div>
            </div>

            <div className="System-body">

            </div>
        </>

    );
}


export default System;