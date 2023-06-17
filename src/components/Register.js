import React from "react"
// import React, {useState} from "react"
import {Form, Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import '../styles/main.css'

function Register() {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const {register, handleSubmit, getValues, reset, formState:{errors}} = useForm()
    // const [show,setShow] = useState(true)

    const navigate = useNavigate()

    const submitForm = (data) => {
        // console.log("Form submitted")
        // console.log(username)
        // console.log(email)
        // console.log(password)
        // console.log(confirmPassword)
        
        // setUsername("")
        // setEmail("")
        // setPassword("")
        // setConfirmPassword("")

        // console.log(data)

        if(data.password === data.confirmPassword) {

            const body = {
                username: data.username,
                email: data.email,
                password: data.password,
            }

            const requestOptions = {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(body)
            }

            fetch("http://localhost:8000/user/register", requestOptions)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))

            reset()

            navigate("/login")

            }

            else {
                alert("Passwords do not match")
        }
    }

    // console.log(watch("username"))
    // console.log(watch("email"))
    // console.log(watch("password"))
    // console.log(watch("confirmPassword"))


    return(
        <div className="register container">
            <div className="form">
                <h1>Register</h1>
                {/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>TEXT HERE
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> */}
                <br></br>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="your username" {...register("username", {required:true, unique:true})} maxLength={20}/>
                    </Form.Group>
                    {errors.username && errors.username.type === 'required' && <p style={{color:"red"}}><small>Username is required</small></p>}
                    {errors.username && errors.username.type === 'unique' && <p style={{color:"red"}}><small>Username is taken</small></p>}
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="your email" {...register("email", {required:true, unique:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})}/>
                    </Form.Group>
                    {errors.email && errors.email.type === 'required' && <p style={{color:"red"}}><small>Email is required</small></p>}
                    {errors.email && errors.email.type === 'unique' && <p style={{color:"red"}}><small>Email is taken</small></p>}
                    {errors.email && errors.email.type === 'pattern' && <p style={{color:"red"}}><small>Email address is invalid</small></p>}
                    <Form.Group>
                        <Form.Label>Password (must be 8 characters or longer)</Form.Label>
                        <Form.Control type="password" placeholder="your password" {...register("password", {required:true, minLength:8})} maxLength={20}/>
                    </Form.Group>
                    {errors.password && errors.password.type === 'required' && <p style={{color:"red"}}><small>Password is required</small></p>}
                    {errors.password && errors.password.type === 'minLength' && <p style={{color:"red"}}><small>Password not long enough</small></p>}
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password" {...register("confirmPassword", {required:true, validate: (value) => value === getValues("password") || "Passwords do not match"})} maxLength={20}/>
                    </Form.Group>
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p style={{color:"red"}}><small>Please confirm your password</small></p>}
                    {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p style={{color:"red"}}><small>Passwords do not match</small></p>}
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>Join the Hoard</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account? <Link className="reroute" to="/login">Log In Here</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default Register