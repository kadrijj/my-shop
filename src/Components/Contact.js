import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_WvAzMkmobmY8Uth3Uf1js");

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
            'user_WvAzMkmobmY8Uth3Uf1js')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-input"> <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div className="form-input"><label>Message</label>
                <textarea name="message" />
            </div>
            <input className="submit-button" type="submit" value="Send" />
        </form>
    );
}

export default Contact;