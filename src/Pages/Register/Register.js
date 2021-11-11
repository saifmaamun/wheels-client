import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Register = () => {

    const { signinUsingGoogle, auth } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            registerNewUser(email, password);
        }
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                window.location.reload()
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    return (
        <div>
        <Header></Header>
            <div>
                <h1 >Please Register</h1>
                
                            <div >
                                <form onSubmit={handleRegistration}>
                                    
                                        <div>
                                            <input type="text" onBlur={handleNameChange} placeholder="Your Name" />
                                        
                                    </div>
                                    
                                        <div>
                                            <input onBlur={handleEmailChange} type="email" required />
                                        
                                    </div>
                                    <div >
                                            <input type="password" onBlur={handlePasswordChange} clarequired />
                                        
                                    </div>

                                    <div >{error}</div>
                                    <button type="submit" >
                                        Register
                                    </button>


                                </form>
                                {/* <br />
                                <p>=====Or Sign in With Google=====</p>
                                <Button onSubmit={signinUsingGoogle}>Sign In With Google</Button>
                                <br /> */}
                                <br />
                                <Link to='/login'><p>Already have an account</p></Link>
                            </div>
                        
            </div>
        </div>
    );
};

export default Register;