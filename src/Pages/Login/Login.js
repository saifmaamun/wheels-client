import React, { useState } from 'react';
import './Login.css'
import { useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';
import Header from '../Shared/Header/Header';




const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"
    // sign in method
    const { signinUsingGoogle, handleUserLogin, error } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
        console.log(url)
        history.push(url)


    };


    return (
        <div>
            <Header></Header>
            <div>
                <h1 className="fw-bolder mt-2">Please Login</h1>

                
                <div className="login-form" >
                                <input onBlur={hanldeEmail} className="w-100 py-3 rounded border-info" type="email"  placeholder="Email" />
                                <br />
                                <br />
                                <input onBlur={hanldePassword}  type="password"  placeholder="Password" />
                                <br />
                                <div >{error}</div>
                                <br />
                                <div >
                        <Button variant="contained" onClick={handleLogin} >Log In</Button>
                                    <br />
                                    <br />
                        <Link style={{ textDecoration: 'none', color:'white', fontWeight:'bold'}} to='/register'><p>New User?</p></Link>
                                </div>
                            </div>
            </div>
        </div>
    );

};

export default Login;