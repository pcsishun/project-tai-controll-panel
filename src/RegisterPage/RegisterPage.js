import "./RegisterPage.css"
import tailogo from "../images/TAI Logo@2x.png"
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const RegisterPage = () => {
    const [RegUsername, checkRegUsername] = useState("");
    const [RegFirstname, checkRegFirstname] = useState("");
    const [RegLastname, checkRegLastname] = useState("");
    const [RegPassword, checkRegPassword] = useState("");
    const [conPassword ,setConPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [isErrorText, setIsErrorText] = useState("")


    const onHaddleSubmit = async () => {
        
        if(RegPassword === conPassword){
            
                const payload = {
                    username: RegUsername,
                    firstname: RegFirstname,
                    lastname: RegLastname,
                    password: RegPassword
                }

                await axios.post("https://7b50-118-172-163-199.ngrok.io/register", payload)
                .then(res => {
                        console.log("this res ==> ",res)
                    });

                console.log("register success");
                console.log(payload);
   

        }else{
            setIsError(true);
            setIsErrorText("password not match")
        }
    }
    

    return(
        <>
            <div className="RegisterPage-All">
                <div className="RegisterPage-TaiLogo">
                    <img className="Tailogo" src={tailogo} height="50px" width="50px"/>
                </div>

                <form>
                    <div className="RegisterBox-Username">
                        <div className="RegisterBox-UsernameBox">
                            <input 
                            type="text" 
                            value={RegUsername} 
                            onChange={(e)=>checkRegUsername(e.target.value)}
                            placeholder="username" required/>
                     </div>
                    </div>

                    <div className="RegisterBox-Firstname">
                        <div className="RegisterBox-FirstnameBox">
                            <input 
                            type="text" 
                            value={RegFirstname} 
                            onChange={(e)=>checkRegFirstname(e.target.value)}
                            placeholder="FirstName" required/>
                     </div>
                    </div>

                    <div className="RegisterBox-Lastname">
                        <div className="RegisterBox-LastnameBox">
                            <input 
                            type="text" 
                            value={RegLastname} 
                            onChange={(e)=>checkRegLastname(e.target.value)}
                            placeholder="username" required/>
                     </div>
                    </div>

                    <div className="RegisterBox-Password">
                        <div className="RegisterBox-PasswordBox">
                            <input 
                            type="password" 
                            value={RegPassword} 
                            onChange={(e)=>checkRegPassword(e.target.value)}
                            placeholder="Password" required/>
                     </div>
                    </div>

                    <div className="RegisterBox-CFPassword">
                        <div className="RegisterBox-CFPasswordBox">
                            <input 
                            type="password" 
                            value={conPassword} 
                            onChange={(e)=>setConPassword(e.target.value)}
                            placeholder="ConfirmPassword" required/> 
                     </div>
                    </div>
                    <div>
                        {isError === true && <h6 style={{color: "red"}}>{isErrorText}</h6>}
                    </div>
                    <div className="Register-Submit">
                        <button onClick={onHaddleSubmit}>submit</button>
                        <div className="alreadly-have-password">
                            <Link to="/loginpage">alreadly have account</Link>
                        </div>
                    </div>

                </form>

            </div>
        
        
        </>


    );
}

export default RegisterPage;