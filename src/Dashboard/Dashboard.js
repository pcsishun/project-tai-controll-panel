import moment from 'moment';
import "./Dashboard.css";
import notificationDash from "../images/Vector (1).png";
import taidash from "../images/TAI Logo@2x.png";
import DashboardBody from "./DashboardBody/DashboardBody.js";

const Dashborad = () => {

    const timeNow = moment().format("MM/DD/YYYY");

    return (
        <>
            <div className="Dashborad-header">
                <div className="header-grid-bar-title">
                    <div className="set-date-container">
                        <div className="greeting-container">
                            <p>Good Morning</p>
                        </div>
                        <div className="date-container">
                            <p>{timeNow}</p>
                        </div>  
                    </div>
                    <div className='notic-container'>
                        <div className='notic-icon-1'>
                            <img className="ringBell" src={notificationDash} height="26px" width="30px"/>
                        </div>
                        <div className='notic-icon-2'>
                            <img className="taiLogo" src={taidash} height="30px" width="30px"/>
                        </div>
                    </div>
                </div>


                <div className='Weather-box'>
                    <div className="Weather-Text">
                        <p>Weather</p>
                    </div>

                    <div className="Weather-Box-TempReport">
                        <div className="Weather-TempCurrent">
                            <div className="TempNow">24&#x2103;</div>
                            <div className="SkyLook">Partly Cloudy</div>
                        </div>
                        <div className="Weather-TempHighLow">
                            <span>
                                <div className="Weather-TempLow">
                                    <div className="TempLow-Text">
                                        <p>Low Temp</p>
                                    </div>

                                    <div className="TempLow-Num">
                                        <p>14&#x2103;</p>
                                    </div>
                                </div>
                            </span>
                            <span>
                                <div className="Weather-TempHigh">
                                    <div className="TempHigh-Text">
                                            <p>High Temp</p>
                                        </div>

                                        <div className="TempHigh-Num">
                                            <p>34&#x2103;</p>
                                        </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Dashborad-body">
                <DashboardBody/>
            </div>
        </>

        
    );
}


export default Dashborad;