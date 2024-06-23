import {Fragment, useState} from "react";

const Login = () => {
    const [error, setError] = useState(false)
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    return (
        <div className="container">
            <form>
                <input type = "text" placeholder="username" value={username}
                       onChange={(event)=>setUsername(event.currentTarget.value)}/>
                <input type = "password" placeholder="password" value={password}
                       onChange={(event)=>setPassword(event.currentTarget.value)}/>
                <button disabled={password ==="" || username ===""}>Login</button>
                <span data-testid = "error" style={{visibility: error ? "visible" : "hidden"}}>something went wrong</span>
            </form>
        </div>
    )
}

export default Login