import React, {useContext, useRef, useState} from 'react';
import {IconButton, Snackbar, SnackbarContent} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import isEmail from 'validator/lib/isEmail';
import { styled } from '@mui/material/styles';
import {AiOutlineCheckCircle, AiOutlineSend} from 'react-icons/ai';
import {FiAtSign, FiPhone} from 'react-icons/fi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import emailjs from '@emailjs/browser';

import {ThemeContext} from '../../contexts/ThemeContext';
import {contactsData} from '../../data/contactsData';
import './Contacts.css';

const SERVICE_ID      = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_REQUEST = import.meta.env.VITE_EMAILJS_TEMPLATE_REQUEST;
const TEMPLATE_REPLY  = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
const PUBLIC_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_REQUEST || !TEMPLATE_REPLY || !PUBLIC_KEY) {
    console.error('EmailJS: una o più variabili d\'ambiente sono mancanti. Controlla il file .env.');
}

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isSubmittingRef = useRef(false);

    const {theme} = useContext(ThemeContext);

    const FormInput = styled('input')(({theme: t}) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }));

    const FormTextarea = styled('textarea')(({theme: t}) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }));

    const FormLabel = styled('label')(({theme: t}) => ({
        backgroundColor: theme.secondary,
        color: theme.primary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 600,
        fontSize: '0.9rem',
        padding: '0 5px',
        transform: 'translate(25px,50%)',
        display: 'inline-flex',
    }));

    const DetailsIcon = styled('div')(({theme: t}) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '23px',
        transition: '250ms ease-in-out',
        flexShrink: 0,
        '&:hover': {
            transform: 'scale(1.1)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const SubmitBtn = styled('button')(({theme: t}) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.08)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    }));

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (isSubmittingRef.current) return;

        const trimmedName    = name.trim();
        const trimmedEmail   = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        if (trimmedName && trimmedEmail && trimmedSubject && trimmedMessage) {
            if (trimmedMessage.length < 10) {
                setErrMsg('Il messaggio è troppo breve (minimo 10 caratteri)');
                setOpen(true);
                return;
            }
            if (isEmail(trimmedEmail)) {
                isSubmittingRef.current = true;
                setIsSubmitting(true);

                const now = new Date();
                const templateParams = {
                    name:    trimmedName,
                    email:   trimmedEmail,
                    subject: trimmedSubject,
                    message: trimmedMessage,
                    date: now.toLocaleDateString('it-IT', {day: 'numeric', month: 'long', year: 'numeric'}),
                    time: now.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}),
                };

                Promise.all([
                    emailjs.send(SERVICE_ID, TEMPLATE_REQUEST, templateParams, PUBLIC_KEY),
                    emailjs.send(SERVICE_ID, TEMPLATE_REPLY, templateParams, PUBLIC_KEY),
                ])
                .then(() => {
                    setSuccess(true);
                    setErrMsg('');
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setTimeout(() => {
                        setSuccess(false);
                        setIsSubmitting(false);
                        isSubmittingRef.current = false;
                    }, 3000);
                })
                .catch(() => {
                    setErrMsg('Errore nell\'invio. Riprova più tardi.');
                    setOpen(true);
                    setIsSubmitting(false);
                    isSubmittingRef.current = false;
                });
            } else {
                setErrMsg('Email non valida');
                setOpen(true);
            }
        } else {
            setErrMsg('Inserisci tutti i campi');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{backgroundColor: theme.secondary}}
        >
            <div className='contacts--container'>
                <h1 style={{color: theme.primary}}>Prenota un appuntamento</h1>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div className='contacts-body'>
                        <div className='contacts-form'>
                            <form onSubmit={handleContactForm}>
                                <div className='input-container'>
                                    <FormLabel htmlFor='Name'>Nome</FormLabel>
                                    <FormInput
                                        placeholder='Sigmund Freud'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='Name'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel htmlFor='Email'>Email</FormLabel>
                                    <FormInput
                                        placeholder='sigmund@freud.brain'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='Email'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel htmlFor='Oggetto'>Oggetto</FormLabel>
                                    <FormInput
                                        placeholder='Appuntamento giorno/mese/anno'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type='subject'
                                        name='Subject'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel htmlFor='Message'>Messaggio</FormLabel>
                                    <FormTextarea
                                        placeholder='Scrivi il tuo messaggio....'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type='text'
                                        name='Message'
                                        className='form-message'
                                    />
                                </div>

                                <div className='submit-btn'>
                                    <SubmitBtn
                                        type='submit'
                                        disabled={isSubmitting}
                                        style={{
                                            opacity: isSubmitting ? 0.6 : 1,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        <p>{!success ? 'Invia' : 'Inviato'}</p>
                                        <div className='submit-icon'>
                                            <AiOutlineSend
                                                className='send-icon'
                                                style={{
                                                    animation: !success ? 'initial' : 'fly 0.8s linear both',
                                                    position: success ? 'absolute' : 'initial',
                                                }}
                                            />
                                            <AiOutlineCheckCircle
                                                className='success-icon'
                                                style={{
                                                    display: !success ? 'none' : 'inline-flex',
                                                    opacity: !success ? '0' : '1',
                                                }}
                                            />
                                        </div>
                                    </SubmitBtn>
                                </div>
                            </form>
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={open}
                                autoHideDuration={4000}
                                onClose={handleClose}
                            >
                                <SnackbarContent
                                    action={
                                        <React.Fragment>
                                            <IconButton
                                                size='small'
                                                aria-label='close'
                                                color='inherit'
                                                onClick={handleClose}
                                            >
                                                <CloseIcon fontSize='small'/>
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                        fontFamily: 'var(--primaryFont)',
                                    }}
                                    message={errMsg}
                                />
                            </Snackbar>
                        </div>

                        <div className='contacts-details'>
                            <a href={`mailto:${contactsData.email}`} className='personal-details'>
                                <DetailsIcon><FiAtSign/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>{contactsData.email}</p>
                            </a>
                            <a href={`tel:${contactsData.phone.replace(" ", "")}`} className='personal-details'>
                                <DetailsIcon><FiPhone/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>{contactsData.phone}</p>
                            </a>
                            <div className='personal-details'>
                                <DetailsIcon><HiOutlineLocationMarker/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>
                                    {contactsData.address1}<br/>{contactsData.address2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={theme.contactsImg}
                        alt='contacts'
                        className='contacts--img'
                    />
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1757341859">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
                     className="transition duration-300 ease-in-out delay-150">
                    <path
                        d="M 0,400 L 0,75 C 74.44102564102565,81.77435897435898 148.8820512820513,88.54871794871795 238,80 C 327.1179487179487,71.45128205128205 430.9128205128204,47.579487179487174 520,38 C 609.0871794871796,28.420512820512823 683.4666666666667,33.13333333333333 751,43 C 818.5333233333,52.86666666666667 879.220512820513,67.8871794871795 958,80 C 1036.779487179487,92.1128205128205 1133.651282051282,101.31794871794871 1217,100 C 1300.348717948718,98.68205128205129 1370.1743589743592,86.84102564102565 1440,75 L 1440,400 L 0,400 Z"
                        stroke="none" strokeWidth="0" fill="#823ae0" fillOpacity="0.4"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                    <path
                        d="M 0,400 L 0,175 C 104.25384615384615,187.47692307692307 208.5076923076923,199.95384615384614 282,190 C 355.4923076923077,180.04615384615386 398.223076923077,147.66153846153847 474,140 C 549.776923076923,132.33846153846153 658.6,149.39999999999998 740,158 C 821.4,166.60000000000002 875.376923076923,166.73846153846156 958,170 C 1040.623076923077,173.26153846153844 1151.892307692308,179.64615384615382 1237,181 C 1322.107692307692,182.35384615384618 1381.053846153846,178.6769230769231 1440,175 L 1440,400 L 0,400 Z"
                        stroke="none" strokeWidth="0" fill="#823ae0" fillOpacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                    <path
                        d="M 0,400 L 0,275 C 87.84358974358975,281.7051282051282 175.6871794871795,288.4102564102564 244,291 C 312.3128205128205,293.5897435897436 361.0948717948718,292.06410256410254 445,291 C 528.9051282051282,289.93589743589746 647.9333333333334,289.3333333333333 751,276 C 854.0666666666666,262.6666666666667 941.1717948717949,236.60256410256414 1003,241 C 1064.8282051282051,245.39743589743586 1101.3794871794871,280.2564102564102 1170,291 C 1238.6205128205129,301.7435897435898 1339.3102564102564,288.3717948717949 1440,275 L 1440,400 L 0,400 Z"
                        stroke="none" strokeWidth="0" fill="#823ae0" fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
                </svg>
            </div>
        </div>
    );
}

export default Contacts;
