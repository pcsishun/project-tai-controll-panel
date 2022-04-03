import "./LoginPage.css"
import tailogo from "../images/TAI Logo@2x.png"
import {useState, useEffect} from 'react';
import {Link, Routes, Route} from 'react-router-dom';

const LoginPage = () => {
    
    const [username, checkUsername] = useState("");
    const [password, checkPassword] = useState(true);
    
    
    return(
        <>
            <div className="loginPage-All">
                <div className="loginPage-TaiLogo">
                    <img className="Tailogo" src={tailogo} height="50px" width="50px"/>
                </div>

                <div className="loginPage-Username">
                    <div>
                    <form>
                        <label>Enter your Username.
                            <div className="UsernameBox">
                                <input 
                                    type="text" 
                                    value={username} 
                                    onChange={(e)=>checkUsername(e.target.value)}
                                    placeholder="username"/>
                            </div>
                        </label>
                    </form>
                    </div>

                    <div>
                    <form className="Password-label">
                        <label>Enter your Password.
                                <div className="PasswordBox">
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e)=>checkPassword(e.target.value)}
                                        placeholder="password"/>
                                </div>
                        </label>
                        <div className="SubmitBox">
                            <button className="loginbut">Login</button>
                            <Link to="/registerpage"><button>Register</button></Link>
                        </div>
                    </form>
                    </div> 

                </div>

            </div>
        </>



    );
}

export default LoginPage;