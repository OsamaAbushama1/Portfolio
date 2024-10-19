import { useRef } from 'react';
import emailjs from 'emailjs-com';
import style from './ContactStyle.module.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1', 'template_1', form.current, 'vD1a7i3OP-XC-Ko3g')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });

        e.target.reset();
    };

    return (
        <section id='content' className={style.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" name='from_name' id='name' placeholder='Name' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" name='from_email' id='email' placeholder='Email' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea name='message' id='message' placeholder='Message' required></textarea>
                </div>
                <input className='hover btn' type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
