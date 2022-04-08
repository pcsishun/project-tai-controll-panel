import "./DashboardBody.css";
import TobaccoMenu from "./CardMenu/CardMenuTobacco"
import FodderMenu from  "./CardMenu/CardMenuFodder"
import {Link, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

// const Dashborad =({match}) => {
//     <div>
//         <Route path={match.url + '/foddermachine'} component={FodderMenu}/>
//     </div>
// }

const DashboardBody = () =>{

    const [changeMachineType, setChangeMachineType] = useState("all-plant");


    return(
        <>
            <div className="myPlantDash">
                <div className="myPlant-Plantation">
                    <p>My Plantation</p>
                </div>
                <div className="myPlant-ProductChoice">
                    <span className="ProductChoice-all-plant">
                        <button onClick={() => setChangeMachineType("all-plant")}>All Plant</button> 
                    </span> 
                    <span className="ProductChoice-Fodder">
                        <button onClick={() => setChangeMachineType("Fodder")}>Fodder</button>    
                    </span> 
                    <span className="ProductChoice-Tobacco">
                        <button onClick={() => setChangeMachineType("Tobacco")}>Tobacco</button>
                    </span>
                </div>
            </div>
            {
                changeMachineType === "all-plant" && <TobaccoMenu/>
            }
            {
                changeMachineType === "Fodder" && <FodderMenu/>
            }
            {
                changeMachineType === "Tobacco"  && <TobaccoMenu/>
            }
            
            
        </>

    );
}



export default DashboardBody;