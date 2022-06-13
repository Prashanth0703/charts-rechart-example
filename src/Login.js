import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault(); //To prevent refresh
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                window.location.href = "/";
            })
            .catch((err) => {
                alert(err.message);
            });
        localStorage.setItem("user", email);
    };
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate("/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div style={{ marginTop: "5%" }} className="login">
            <div className="login__container">
                <h1>Sign-In</h1>
                <form action="/">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="login__signInButton"
                        onClick={signIn}
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
                <button className="login__registerButton" onClick={register}>
                    Create an Account
                </button>
            </div>
        </div>
    );
}

export default Login;
