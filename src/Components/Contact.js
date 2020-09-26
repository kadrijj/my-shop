import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <>
                <div className="centered-contact">
                    <div className="contact-container">
                        <h3>Contact Us</h3>
                        <p>We'd love to hear from you! Please fill in the form below and we will get back to you shortly. We are also available on Instagram - let's connect in the DMs!</p>
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/mjvpvnld"
                            method="POST"
                        >
                            <label>Email:</label>
                            <input type="email" name="email" />
                            <label>Message:</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            {status === "SUCCESS" ? <p>Thank you for sending us a message! We will get back to you very soon!</p> : <button className="submit-button">Send</button>}
                            {status === "ERROR" && <p>Ooops! There was an error. Did you insert an email address?</p>}
                        </form>
                        <li><SocialIcon url="https://www.instagram.com/jkadrij/" /></li>
                    </div>
                </div>
            </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

export default Contact;