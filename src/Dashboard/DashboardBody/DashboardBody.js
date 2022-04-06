import "./DashboardBody.css";
import CardMenuFodder from "./CardMenu/CardMenuFodder"
import FodderMenu from  "./CardMenu/CardMenuFodder"
import {Link} from 'react-router-dom';

const DashboardBody = () =>{
    return(
        <>
            <div className="myPlantDash">
                <div className="myPlant-Plantation">
                    <p>My Plantation</p>
                </div>
                <div className="myPlant-ProductChoice">
                    <span className="ProductChoice-all-plant">All Plant</span> 
                    <span className="ProductChoice-Fodder"><Link to="/src/Dashboard/DashboardBody/CardMenu/CardMenuFodder.js">Fodder</Link></span> 
                    <span className="ProductChoice-Tobacco">Tobacco</span>
                </div>
            </div>
        </>

    );
}

export default DashboardBody;