import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const[isLoading,setIsLoading]=useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false);
    const auth = getAuth()

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
        .finally(()=>setIsLoading(false))
    }
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])
    
// new user registration
    const registerNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    


    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://arcane-badlands-01231.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    useEffect(() => {
        fetch(`https://arcane-badlands-01231.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

// 

// 
    
    return {
            auth,
            user,
            admin,
            error,
            logout,
            handleUserLogin,
        registerNewUser,
        isLoading
        }
}

export default useFirebase;