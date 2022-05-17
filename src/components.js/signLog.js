import { useState } from "react";

export const SignLogForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username, email, password);
    }

    return (
        <form onSubmit={submitHandler} >
            <input onChange={() => setUsername(e.target.value)} 
            placeholder="Username"/>
            <input onChange={() => setEmail(e.target.value)}/>
            <input onChange={() => setPassword(e.target.value)}/>
            <button type="submit"> Sign-up </button>
        </form>
    )
}