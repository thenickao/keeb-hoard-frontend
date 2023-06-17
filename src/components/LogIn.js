import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import "../styles/main.css"

function LogIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const logIn = () => {
        // console.log(username)
        // console.log(password)

        setUsername("")
        setPassword("")

        navigate("/")
    }
    
    return(
        <div className="login container">
            <div className="form">
                <h1>Log In</h1>
                <br></br>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="your username" value={username} name="username" onChange={(e)=>{setUsername(e.target.value)}} maxLength={20}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="your password"value={password} name="password"onChange={(e)=>{setPassword(e.target.value)}} maxLength={20}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={logIn}>Enter the Hoard</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Do not have an account? <Link className="reroute" to="/register">Register Here</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default LogIn