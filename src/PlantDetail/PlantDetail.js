import "./PlantDetail.css"
import BackButton from "../images/Button Back.png"
import LeafIcon from "../images/LeafIcon.png"
import HumidityImage from "../images/humidity 1.png"
import TempImage from "../images/thermometer 1.png"
import PlantAgeImage from "../images/carbon_soil-moisture-field.png"
import WaterIcon from "../images/Vector.png"
import MoonIcon from "../images/MoonIcon.png"
import Fan from "../images/fan 1.png"
import ThreeLeaf from "../images/3Leaf.png"
import AiChip from "../images/chip-2 1.png"
import {useState, useEffect} from 'react';



const PlantDetail = () => {

    // const [isActive, setIsActive] = useState(false);
    const [waterToggle, setWaterToggle] = useState("Water-Control");
    const [lightToggle, setLightToggle] = useState("Lighting-Control");
    const [fanToggle, setFanToggle] = useState("RoomFan-Control");
    const [fertilizerToggle, setFertilizerToggle] = useState("Fertilizer-Control")
 

    // const ButtonActive =()=>{
        
    //     if(isActive === false){
    //         setIsActive(true);
    //         console.log("if ",isActive)

    //     }else{
    //         setIsActive(false)
    //         console.log("else ",isActive)
    //     }
    // }

    const buttonWater = () => {
        
    }

    const buttonLight = () =>{

    }

    // RoomFan-Control-active
    const buttonFan = () => {
        if(fanToggle === "RoomFan-Control"){
            setFanToggle("RoomFan-Control-active")
        }
        else{
            setFanToggle("RoomFan-Control")
        }
    }

    const buttonFertilizer = () =>{

    }


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
                {/* ---Row 1 Water and Lighting Control--- */}

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
                            <p>2h 30min</p>
                        </div>
                    </div>
                    <div className="Lighting-Control">
                        <div className="LightingIcon-Button">
                                <div className="Lighting-Icon">
                                    <img className="Lighting-Drop" src={MoonIcon} width="20" height="23"/>
                                </div>
                                {/* ----SwitchButtonBelow---- */}
                                <div className="Lighting-Control-Button">
                                    <label className="Lighting-Control-Switch">
                                        {/* สร้าง state เก็บค่า toggle */}
                                        <input type="checkbox" />
                                        <span className="Lighting-Swtich-Slider" />
                                    </label>
                                </div>
                                {/* ----SwitchButton---- */}
                            </div>

                            <div className="Lighting-Label">
                                <p>Lighting</p>
                            </div>

                            <div className="Lighting-CountDown">
                                <p>8h 30min</p>
                            </div>
                    </div>
                </div>

                {/* ---Row Number 2 For Room Fan and Fertilizer Spray--- */}

                <div className="PlantDetail-WaterLighting">
                    <div className={fanToggle}>
                        <div className="RoomFanIcon-Button">
                            <div className="RoomFan-Icon">
                                <img className="RoomFan-Drop" src={Fan} width="20" height="23"/>
                            </div>
                            {/* ----SwitchButtonBelow---- */}
                            <div className="RoomFan-Control-Button">
                                <label className="RoomFan-Control-Switch">
                                    <input type="checkbox" onChange={buttonFan}/>
                                    <span className="RoomFan-Swtich-Slider" />
                                </label>
                            </div>
                            {/* ----SwitchButton---- */}
                        </div>

                        <div className="RoomFan-Label">
                            <p>Room Fan</p>
                        </div>

                        <div className="RoomFan-CountDown">
                            <p>5h 30min</p>
                        </div>
                    </div>
                    <div className="Fertilizer-Control">
                        <div className="FertilizerIcon-Button">
                                <div className="Fertilizer-Icon">
                                    <img className="Fertilizer-Drop" src={ThreeLeaf} width="25" height="25"/>
                                </div>
                                {/* ----SwitchButtonBelow---- */}
                                <div className="Fertilizer-Control-Button">
                                    <label className="Fertilizer-Control-Switch">
                                        <input type="checkbox" />
                                        <span className="Fertilizer-Swtich-Slider" />
                                    </label>
                                </div>
                                {/* ----SwitchButton---- */}
                            </div>

                            <div className="Fertilizer-Label">
                                <p>Fertilizer Sprayer</p>
                            </div>

                            <div className="Fertilizer-CountDown">
                                <p>1h 30min</p>
                            </div>
                    </div>
                </div>

                <div className="System-Automatic">
                    <div className="Automate-Image">
                        <div className="Automate-Image-Background">
                            <img className="Automate-Chip-Image" src={AiChip} width="65"/>

                        </div>
                    </div>
                    <div className="Automate-Label-Timer">
                        <div className="Automate-Label">
                            <p>Automatic Mode</p>
                        </div>

                        <div className="Automate-Timer">
                            <p>1h 30min</p>
                        </div>

                    </div>
                    <div className="Automate-Switch">
                        <div className="Automate-Button-Control">
                            <label className="Automate-Control-Switch">
                                <input type="checkbox"/>
                                <span className="Automate-Control-Slider"/>
                            </label>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


export default PlantDetail;