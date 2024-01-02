import React, { useState, useEffect } from 'react';
import './contactstyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import customToast from '../react-toast/toast';
import { ToastContainer, toast } from 'react-toastify'
import Spinner from '../spinner/Spinner';


function Section3() {
    const [contactMsg, setContactMsg] = useState("");
    const [msgType, setMsgType] = useState("")
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: ""
    })
    const [btnText, setBtnText] = useState("SEND MAIL")
    const successNotify = (msg) => customToast.success(msg);
    const dangerNotify = (msg) => customToast.error(msg);
    const [showSpinner, setShowSpinner] = useState(false);


    // Updating the state of all form inputs.
    const handleContactInputs = (e) => {
        setContact({
            ...contact, [e.target.name]: e.target.value
        })
        setContactMsg("")
    }

    // Making a post request to the server upon form submission
    const handleContactSubmit = (e) => {
        e.preventDefault();

        if (contact.name == "") {
            setContactMsg("Name can't be empty!")
            setMsgType("error")
        } else if (contact.email == "") {
            setContactMsg("Email can't be empty!")
            setMsgType("error")
        } else if (contact.phone_number == "") {
            setContactMsg("Phone Number can't be empty!")
            setMsgType("error")
        } else if (contact.subject == "") {
            setContactMsg("Subject can't be empty!")
            setMsgType("error")
        } else if (contact.message == "") {
            setContactMsg("Please include your message")
            setMsgType("error")
        } else {
            setBtnText("SENDING...")
            setShowSpinner(true)

            fetch(`${process.env.REACT_APP_API}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(contact)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.status == "success") {
                        setContactMsg(result?.msg)
                        successNotify(result?.msg)
                        setMsgType("success")
                        setBtnText("SENT")
                        setShowSpinner(false)
                        window.setTimeout(() => {
                            setBtnText("SEND MAIL")
                        }, 2000)
                        setContact({ name: "", email: "", phone_number: "", subject: "", message: "" })
                        console.log(result);
                    } else {
                        setContactMsg("An error occured, please try again!")
                        dangerNotify("An error occured, please try again!")
                        setMsgType("error")
                        setBtnText("SEND MAIL")
                        setShowSpinner(false)
                    }
                })
        }

    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div id='contact-section3'>
            <div className='container'>
                <div className='contact-section3-left' data-aos="fade-right">
                    <div className='contact-header'>
                        <h2>Get In Touch</h2>
                    </div>
                    <div className='contact-subheader'>
                        <p>
                            Would you like to get in touch
                            with us, kindly fill out the form below
                            and we'll get back to you within the shortest time.
                        </p>
                        {
                            contactMsg &&
                            <div
                                className='contact-msg'
                                style={{
                                    color: msgType == "error" ? "brown" : "forestgreen",
                                }}
                            >{contactMsg} </div>
                        }
                    </div>
                    <div className='contact-form'>
                        <form onSubmit={handleContactSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name*'
                                    value={contact.name}
                                    onChange={handleContactInputs}
                                />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Your Email*'
                                    value={contact.email}
                                    onChange={handleContactInputs}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='tel'
                                    name='phone_number'
                                    placeholder='Phone Number*'
                                    value={contact.phone_number}
                                    onChange={handleContactInputs}
                                />
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject*'
                                    value={contact.subject}
                                    onChange={handleContactInputs}
                                />
                            </div>
                            <div className='form-text-area'>
                                <textarea
                                    name="message"
                                    placeholder='Type Your Message...'
                                    onChange={handleContactInputs}
                                    value={contact.message}
                                />
                            </div>
                            <div className='contact-btn'>
                                <button type='submit' disabled={showSpinner}>{btnText}</button>
                                {showSpinner ? <Spinner /> : ''}
                            </div>
                        </form>
                    </div>
                </div>
                <div className='contact-section3-right' data-aos="fade-left">
                    <div className='contact-images-section'>
                        <div className='contact-image image1'>
                            <img src='/assets/contact-images/ellipse1.png' />
                        </div>
                        <div className='contact-image image2'>
                            <img src='/assets/contact-images/ellipse2.png' />
                        </div>
                        <div className='contact-image image3'>
                            <img src='/assets/contact-images/ellipse3.png' />
                        </div>
                        <div className='contact-image image4'>
                            <img src='/assets/contact-images/ellipse4.png' />
                        </div>
                        <div className='contact-image image5'>
                            <img src='/assets/contact-images/ellipse5.png' />
                        </div>
                        <div className='contact-image image6'>
                            <img src='/assets/contact-images/support2.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section3;
