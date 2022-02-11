import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_rrvnzco",
                "template_3v5nih4",
                formRef.current,
                "user_DrriDPTGKO2Zj4RDXCA6W"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact">
            <div className="contactLeft"></div>
            <div className="c">
                <div className="left">
                    <h1 className="title">Contact Me to work with  u :)</h1>
                    <div >
                        <div className="InfoIthem">
                            <img src={Phone} alt="" className="icon" />
                            +212 5608764
                        </div>
                        <div className="InfoIthem">
                            <img className="icon" src={Email} alt="" />
                            ayoub@gmail.fr
                        </div>
                        <div className="InfoIthem">
                            <img className="icon" src={Address} alt="" />
                            15 Bouab, Qu vie nouvelle Safi Maroc
                        </div>
                    </div>
                </div>
                <div className="right">

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
