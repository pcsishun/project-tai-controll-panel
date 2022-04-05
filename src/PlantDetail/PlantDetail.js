import "./PlantDetail.css"
import BackButton from "../images/Button Back.png"
import LeafIcon from "../images/LeafIcon.png"
import HumidityImage from "../images/humidity 1.png"
import TempImage from "../images/thermometer 1.png"
import PlantAgeImage from "../images/carbon_soil-moisture-field.png"
import WaterIcon from "../images/Vector.png"


const PlantDetail = () => {
    return (
        <>
            <div className="PlantDetail-header">
                <div className="PlantDetail-BackButton">
                    <img src={BackButton} width="44" height="44"/>
                </div>
                <div className="PlantDetail-PlantCount">
                    <p className="">800 Plants</p>
                </div>
                <div className="PlantDetail-ProductName">
                    <div>
                        <div className="ProductName">
                            <p>Fodder Plantation</p>
                        </div>
                        <div className="ProductName-Location">
                            <p>Sansai, Chiang Mai, Thailand</p>
                        </div>
                    </div>
                    <div className="ProductName-LeafIcon">
                        <img src={LeafIcon} width="80" height="80"/>
                    </div>
                </div>
                <div className="PlantDetail-SensorMonitor">
                    <div className="Monitor-Humidity">
                        <div className="Humidity-Image">
                            <img className="" src={HumidityImage} height="26" width="26"/>
                        </div>
                        <div className="Humidity-Text">
                            <p>Humidity</p>
                        </div>
                        <div className="Humidity-Var">
                            <p>20 %</p>
                        </div>
                    </div>
                    <div className="Monitor-Temp">
                        <div className="Temp-Image">
                            <img className="" src={TempImage} height="26" width="26"/>
                        </div>
                        <div className="Temp-Text">
                            <p>Temperature</p>
                        </div>
                        <div className="Temp-Var">
                            <p>22&#x2103;</p>
                        </div>

                    </div>
                    <div className="Monitor-PlantAge">
                        <div className="PlantAge-Image">
                            <img className="" src={PlantAgeImage} height="26" width="26"/>
                        </div>
                        <div className="PlantAge-Text">
                            <p>Temperature</p>
                        </div>
                        <div className="PlantAge-Var">
                            <p>7 Days</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="PlantDetail-body">
                <div className="PlantDetail-WaterLighting">
                    <div className="Water-Control">
                        <div className="WaterIcon-Button">
                            <div className="Water-Icon">
                                <img className="Water-Drop" src={WaterIcon} width="20" height="23"/>
                            </div>
                            {/* ----SwitchButtonBelow---- */}
                            <div className="Water-Control-Button">
                                <label className="Water-Control-Switch">
                                    <input type="checkbox" />
                                    <span className="Water-Swtich-Slider" />
                                </label>
                            </div>
                            {/* ----SwitchButton---- */}
                        </div>

                        <div className="WaterSpray-Label">
                            <p>Water Spray</p>
                        </div>

                        <div className="WaterSpray-CountDown">
                            <p>8h 30min</p>
                        </div>
                    </div>
                    <div className="Lighting-Control">

                    </div>
                </div>

            </div>
        </>
    );
}


export default PlantDetail;