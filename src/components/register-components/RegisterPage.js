import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registerstyle.css';

function RegisterPage() {
    const [userMsg, setUserMsg] = useState("");
    const [msgType, setMsgType] = useState("");
    const [btnText, setBtnText] = useState("Register");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone_number: "",
        password: "",
        confirm_password: ""
    })

    // If user is logged in, he should not be able to access register page
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }, [])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setUserMsg("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the file 
        let fileInput = document.getElementById("pic_v").files[0];

        // Validate all inputs now 
        if (user.first_name == "") {
            setUserMsg("First Name can't be empty!")
            setMsgType("error")
            return;
        } else if (user.last_name == "") {
            setUserMsg("Last Name can't be empty!")
            setMsgType("error")
            return;
        } else if (user.email == "") {
            setUserMsg("Email can't be empty!")
            setMsgType("error")
            return;
        } else if (user.address == "") {
            setUserMsg("Address can't be empty!")
            setMsgType("error")
            return;
        } else if (user.phone_number == "") {
            setUserMsg("Phone can't be empty!")
            setMsgType("error")
            return;
        } else if (user.password == "") {
            setUserMsg("Password can't be empty!")
            setMsgType("error")
            return;
        } else if (user.confirm_password == "") {
            setUserMsg("Confirm password can't be empty!")
            setMsgType("error")
            return;
        } else if (user.password != user.confirm_password) {
            setUserMsg("Password and Confirm Password do not match!")
            setMsgType("error")
            return;
        } else if (fileInput == undefined || fileInput == null) {
            setUserMsg("Please select a profile picx!")
            setMsgType("error")
            return;
        } else {
            // Validate if the email format is valid 
            var p = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/ig;
            var rg = user.email.match(p);

            if (!rg) {
                setMsgType('error')
                setUserMsg("Please enter a valid email.");
                return;
            }

            // Function to get the extension of the uploaded file 
            function getFileExtension(str) {
                let splittedStr = str?.split('.')
                return splittedStr[splittedStr?.length - 1]
            }

            // Get file extension now
            const fileExtension = getFileExtension(fileInput?.name)

            // Validate if the file is an image or not 
            if (fileExtension?.toLowerCase() == 'jpg' ||
                fileExtension?.toLowerCase() == 'png' ||
                fileExtension?.toLowerCase() == 'jpeg') {
                setUserMsg("")

                // All tests have passed, append all inputed data to the form data
                let formData = new FormData();

                formData.append('first_name', user.first_name);
                formData.append('last_name', user.last_name);
                formData.append('email', user.email);
                formData.append('address', user.address);
                formData.append('phone_number', user.phone_number);
                formData.append('password', user.password);
                formData.append('confirm_password', user.confirm_password);
                formData.append('profile_picx', fileInput);

                console.log('googd to go...')

                setBtnText("Registering...")

                // Make API call now 
                await axios
                    .post(`${process.env.REACT_APP_API}/register`, formData)
                    .then((res) => {
                        console.log(res)

                        if (res.status == 200) {
                            setUserMsg(res?.data?.message)
                            setMsgType("success")
                            setBtnText("Redirecting...")

                            // Redirect to the login page 
                            window.setTimeout(() => {
                                window.location = "/login";
                            }, 2500)
                        }
                    })
                    .catch(error => {
                        console.log(error.response.data)

                        setUserMsg("User with this email already exists!")
                        setMsgType("error")
                        setBtnText("Register")
                    })

            } else {
                console.log("File must be an image.")
                setUserMsg('danger')
                setUserMsg("Please kindly upload a valid file format(jpg, jpeg, png).")
                return;
            }
        }
    }

    return (
        <div className='container' id='register'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='login-header'>
                    <h2>REGISTER</h2>
                    <p>
                        {
                            userMsg &&
                            <div
                                className='contact-msg'
                                style={{
                                    backgroundColor: msgType == "error" ? "brown" : "forestgreen",
                                    color: 'white',
                                    width: '80%',
                                    margin: '0 auto'
                                }}
                            >{userMsg} </div>
                        }
                    </p>
                </div>
                <div className='form-group'>
                    <input type='text' name='first_name' placeholder='First Name...' value={user.first_name} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='text' name='last_name' placeholder='Last Name...' value={user.last_name} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='text' name='email' placeholder='Type your email...' value={user.email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='text' name='address' placeholder='Home Address...' value={user.address} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='tel' name='phone_number' placeholder='Phone Number' value={user.phone_number} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='file' id="pic_v" name='profile_picx' />
                </div>
                <div className='form-group'>
                    <input type='password' name='password' placeholder='Password' value={user.password} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='password' name='confirm_password' placeholder='Confirm Password' value={user.confirm_password} onChange={handleChange} />
                </div>
                <div className='btn'>
                    <button type='submit'>{btnText}</button>
                </div>
                <div className='lower'>
                    <p>Already have an account? <Link to="/login"><button>Login</button></Link></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;
