//import Loader from 'react-loaders';
import {useRef} from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_8h8939h',
                'template_b5dlr3y',
                refForm.current,
                'TubI3w4xvFpEwQDLW'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message')
                }
            )
    }

    return (
        <>
            <div className='container contact-page' >
                <div className='text-zone'><h2>CONNECT WITH ME</h2>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="MESSAGE" name = "message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact