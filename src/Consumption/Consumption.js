import "./Consumption.css"
import  BackButton from "../images/Button Back.png"
import WaterDrop from "../images/waterdropblue.png"
import ThunderIcon from "../images/thunder-2 2.png"

const Consumption = () => {
    return (
        <>
            <div className="Consumption-header">
                <div className="Consumption-BackButton">
                    <img src={BackButton} width="44" height="44"/>
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

            </div>
        </>
    );
}


export default Consumption;