import React, { useState } from 'react';

function FaqRight() {
    const [faqMsg, setFaqMsg] = useState("");
    const [faqMsgType, setFaqMsgType] = useState("");
    const [btnTxt, setBtnTxt] = useState("Send");
    const [faq, setFaq] = useState({
        name: "",
        phone_number: "",
        subject: "",
        question: ""
    })

    // Updating the state of all form inputs.
    const handleFaqInputs = (e) => {
        setFaqMsg("")
        setFaq({
            ...faq, [e.target.name]: e.target.value
        })
    }

    // Handling faq form submission
    const handleFaqSubmit = (e) => {
        e.preventDefault();

        if (faq.name == "") {
            setFaqMsg("Name can't be empty!")
            setFaqMsgType("error")
        } else if (faq.phone_number == "") {
            setFaqMsg("Phone Number can't be empty!")
            setFaqMsgType("error")
        } else if (faq.subject == "") {
            setFaqMsg("Subject can't be empty!")
            setFaqMsgType("error")
        } else if (faq.question == "") {
            setFaqMsg("Please include your question.")
            setFaqMsgType("error")
        } else {
            setBtnTxt("Sending...")

            fetch(`${process.env.REACT_APP_API}/faq`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(faq)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.status == "success") {
                        setBtnTxt('Send')
                        setFaqMsgType("success")
                        setFaqMsg(result?.msg?.slice(0, 29))
                        setFaq({ name: "", phone_number: "", subject: "", question: "" })
                    }
                })
        }
    }

    return (
        <div className='faq-form'>
            <form onSubmit={handleFaqSubmit}>
                <div className='faq-form-header'>
                    <h3>Ask a question</h3>
                    {
                        faqMsg &&
                        <div
                            className='faq-msg'
                            style={{
                                backgroundColor: faqMsgType == "error" ? "brown" : "forestgreen",
                                color: 'white',
                                width: '60%',
                                margin: '0 auto',
                                fontSize: '14px'
                            }}
                        >{faqMsg} </div>
                    }
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Name*'
                        value={faq.name}
                        onChange={handleFaqInputs}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='tel'
                        name='phone_number'
                        placeholder='Phone Number*'
                        value={faq.phone_number}
                        onChange={handleFaqInputs}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject*'
                        value={faq.subject}
                        onChange={handleFaqInputs}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name="question"
                        placeholder='Type Your Question...'
                        value={faq.question}
                        onChange={handleFaqInputs}
                    />
                </div>
                <div className='form-btn'>
                    <button type='submit'>
                        {btnTxt}
                        <i class="fa fa-fighter-jet ml-2" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FaqRight;
