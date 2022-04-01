import "./DashboardBody.css";
import CardMenuAll from "./CardMenu/CardMenuAll";

const DashboardBody = () =>{
    return(
        <>
            <div className="myPlantDash">
                <div className="myPlant-Plantation">
                    <p>My Plantation</p>
                </div>
                <div className="myPlant-ProductChoice">
                    <span className="ProductChoice-all-plant">All Plant</span> 
                    <span className="ProductChoice-Fodder">Fodder</span> 
                    <span className="ProductChoice-Tobacco">Tobacco</span>
                </div>
                <CardMenuAll/>

            </div>


        
        
        </>

    );
}

export default DashboardBody;