import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { social } from '../components/social';

const SERVICE_ID = "service_c3x9fkq";
const TEMPLATE_ID = "template_3wkxxrv";
const USER_ID = "user_eKuhS5BwVojkXVghgM9kV";

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    //{/* --- handleOnSubmit method --- */ }
    return (
        <section className='section-c' style={{ height: 'calc(100vh - 70px)' }}>
            <h1>contact us</h1>
            <div className='social'>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <h3>or mail us</h3>
            <div className='contact'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        name='user_email'
                        placeholder='Email…'
                        required
                        icon='mail'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Name'
                        name='user_name'
                        placeholder='Name…'
                        required
                        icon='user circle'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name='user_message'
                        placeholder='Message…'
                        required
                    />
                    <Button type='submit' className='btn-c' >Submit</Button>
                </Form>
            </div >
        </section >
    );
};

export default Contact;