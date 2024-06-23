import React, {useState} from "react";
import axios from "axios";



type User = {
    name: string
}

const Login = () => {
    const [error, setError] = useState(false)
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState(false)

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            setUser(data);
        } catch {
            setError(true);
        }
        setLoading(false)
    };

    return (
        <div className="container">
            <span>{user ? user.name : ""}</span>
            <form>
                <input type = "text" placeholder="username" value={username}
                       onChange={(event)=>setUsername(event.currentTarget.value)}/>
                <input type = "password" placeholder="password" value={password}
                       onChange={(event)=>setPassword(event.currentTarget.value)}/>
                <button disabled={password ==="" || username ===""} onClick={handleClick}> {loading ? "please wait" : "Login"}</button>

                <span data-testid = "error" style={{visibility: error ? "visible" : "hidden"}}>something went wrong</span>
            </form>
        </div>
    )
}

export default Login