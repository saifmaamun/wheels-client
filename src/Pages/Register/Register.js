import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Register.css'

import {useHistory } from 'react-router-dom';

const Register = () => {

    const { registerNewUser, auth } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();


    const handleNameChange = e => {
        setName(e.target.value);
        console.log(name);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name, history);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            registerNewUser(email, password, name, history);
        }
    }



    return (
        <div>
        <Header></Header>
            <div>
                <h1 >Please Register</h1>
                
                <div className="register-form" >
                                <form onSubmit={handleRegistration}>
                                    
                                        <div>
                                            <input type="text" onBlur={handleNameChange} placeholder="Your Name" />
                                        
                                    </div>
                                    
                                        <div>
                                            <input onBlur={handleEmailChange} type="email" required />
                                        
                                    </div>
                                    <div >
                                            <input type="password" onBlur={handlePasswordChange} required />
                                        
                                    </div>

                                    <div >{error}</div>
                        <Button variant="contained" type="submit" >
                                        Register
                                    </Button>


                                </form>
                                <br />
                    <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to='/login'><p>Already have an account</p></Link>
                            </div>
                        
            </div>
        </div>
    );
};

export default Register;