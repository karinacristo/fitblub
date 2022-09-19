import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

export const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i7nr5qs', 'template_kmnfflc', form.current, 'cOLmUG0sKyPiCP3Qk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span>PRONTO PARA</span>
                    <span className='stroke-text'> O SEU CORPO</span>
                </div>
                <div>
                    <span className='stroke-text'> SUBIR DE NÍVEL</span>
                    <span> CONOSCO?</span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type='email' name='user_email' placeholder='Coloque seu email' />
                    <button className='btn btn-j'>Entrar</button>
                </form>
            </div>
        </div>
    )
}
