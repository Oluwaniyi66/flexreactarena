import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginstyles.css';
import { StoreContext } from '../../screens/StoreContext';

function LoginPage() {
    const [userMsg, setUserMsg] = useState("");
    const [msgType, setMsgType] = useState("");
    const [btnText, setBtnText] = useState("SIGN IN");
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    // If user is logged in, he should not be able to access the login page
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/home')
        }
    }, [])

    // Handle change of the input values
    const handleLoginChange = (e) => {
        setUserMsg("")
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault();

        if (login.email == "") {
            setUserMsg("Email can't be empty!")
            setMsgType("error")
            return;
        } else if (login.password == "") {
            setUserMsg("Password can't be empty!")
            setMsgType("error")
            return;
        } else {

            try {
                setBtnText('Requesting...')

                fetch(`${process.env.REACT_APP_API}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(login)
                })
                    .then(res => res.json())
                    .then(result => {

                        console.log(result)

                        if (result.status == 'success') {
                            setUserMsg("Login Successful");
                            setBtnText("Redirecting...")
                            setMsgType("success")

                            let token = result.token;
                            let userDetails = result.user;

                            // Set user and token to local storage 
                            localStorage.setItem('user', JSON.stringify(userDetails));
                            localStorage.setItem('token', JSON.stringify(token));

                            // Redirect after 3secs 
                            window.setTimeout(() => {
                                navigate('/shop');
                            }, 3000)
                        } else {
                            // setErrorMessage(result.msg);
                            console.log(result?.msg);
                            setUserMsg(result?.msg)
                            setMsgType("error")
                            setBtnText("SIGN IN")
                        }
                    })
            } catch (error) {
                console.log('login-error', error)

                setUserMsg("An error occured, please try again!")
                setMsgType("error")
                setBtnText("SIGN IN")
            }
        }
    }

    return (
        <div className='container' id='login'>
            <form onSubmit={handleLogin}>
                <div className='login-header'>
                    <h2>LOGIN</h2>
                    {
                        userMsg &&
                        <div
                            className='contact-msg'
                            style={{
                                backgroundColor: msgType == "error" ? "brown" : "forestgreen",
                                color: 'white',
                                width: '80%',
                                margin: '15px auto'
                            }}
                        >{userMsg} </div>
                    }
                </div>
                <div className='form-group'>
                    <input
                        name="email"
                        type='email'
                        placeholder='Type your email...'
                        value={login.email}
                        onChange={handleLoginChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        name="password"
                        type='password'
                        placeholder='Type your passwword...'
                        value={login.password}
                        onChange={handleLoginChange}
                    />
                </div>
                <div className='btn'>
                    <button type='submit'>{btnText}</button>
                </div>
                <div className='lower'>
                    <p>Dont have an account? <Link to="/register"><button>Sign Up</button></Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;
