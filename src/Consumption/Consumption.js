import "./Consumption.css"
import  BackButton from "../images/Button Back.png"
import WaterDrop from "../images/waterdropblue.png"
import ThunderIcon from "../images/thunder-2 2.png"
import {useState, useEffect} from 'react';
import LineChart from "./Chart/Linechart";
import { Link } from "react-router-dom";



const Consumption = () => {

    const [dayColor, setdayColor] = useState("Date-Day-Active");

    const [monthColor, setmonthColor] = useState("Date-Month");

    const [yearColor, setyearColor] = useState("Date-Year");

    return (
        <>
            <div className="Consumption-header">
                <div className="Consumption-BackButton">
                    <Link to="/dashboard"><img src={BackButton} width="44" height="44"/></Link>
                </div>
                <div className="FlexResource-Icon">
                    <div className="Consumption-ResourceConsumption">
                        <p>Resource<br/>Consumption</p>
                    </div>
                    <div className="Resource-Icon">
                        <div className="Icon-Round">
                            <img className="WaterDrop-Edit" src={WaterDrop} width="30" height="40"/>
                            <img className="ThunderIcon-Edit" src={ThunderIcon} width="27px" height="27px"/> 
                        </div>
                    </div>
                </div>
                <div className="Consumption-Location">
                    <p>Sansai, Chiang Mai, Thailand</p>
                </div>
                  
            </div>

            <div className="Consumption-body">
                <div className="Consumption-Date">
                <span className="Consumption-Date-Day"><button className={dayColor} onClick={()=> {setdayColor("Date-Day-Active"); setmonthColor("Date-Month"); setyearColor("Date-Year")}}>
                Day</button>
                </span>
                <span className="Consumption-Date-Month"><button className={monthColor} onClick={()=> {setmonthColor("Date-Month-Active"); setdayColor("Date-Day"); setyearColor("Date-Year")}}>
                Month</button>
                </span>
            <span className="Consumption-Date-Year"><button className={yearColor} onClick={()=> {setyearColor("Date-Year-Active"); setdayColor("Date-Day"); setmonthColor("Date-Month")}}>
                Year</button>
                </span>
                </div>

                <div className="Consumption-Cost">
                    <div className="Consumption-WaterPrice">
                        <div className="WaterPrice-HalfCircle"><span>14<br/>THB</span></div>
                        <div className="WaterPrice-Image"> <img src={WaterDrop} width="28" height="38"/></div>
                        <div className="WaterPrice-Label">Water Price</div>
                    </div>

                    <div className="Consumption-ElectricPrice">
                        <div className="ElectricPrice-HalfCircle"><span>34<br/>THB</span></div>
                        <div className="ElectricPrice-Image"> <img src={ThunderIcon} width="30px" height="32px"/></div>
                        <div className="ElectricPrice-Label">Electricity Price</div>
                    </div>
                </div>

                <div className="Consumption-Resource-Graph">
                    <LineChart/>
                </div>

            </div>
        </>
    );
}


export default Consumption;