import { useState } from "react";
import { signUp, logIn } from "../utils.js/index";

export const SignForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitSignUpHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password, setUser);
    }

    return (
        <form onSubmit={submitSignUpHandler}>
            <input onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <input onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" > Sign-up </button>
        </form>

        
    )

}

export const LogForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitLogInHandler = (e) => {
        e.preventDefault();
        logIn(username, email, password, setUser);
    }

    return (
        <form onSubmit={submitLogInHandler}>
            <input onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <input onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" > Log-in</button>
        </form>

        
    )

}
