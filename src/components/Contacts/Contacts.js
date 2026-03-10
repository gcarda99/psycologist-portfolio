import React, {useContext, useRef, useState} from 'react';
import {IconButton, Snackbar, SnackbarContent} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import isEmail from 'validator/lib/isEmail';
import {styled} from '@mui/material/styles';
import {AiOutlineCheckCircle, AiOutlineSend} from 'react-icons/ai';
import {FiAtSign, FiPhone} from 'react-icons/fi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import {FaWhatsapp} from 'react-icons/fa';

import {ThemeContext} from '../../contexts/ThemeContext';
import {contactsData} from '../../data/contactsData';
import WaveDivider from '../WaveDivider/WaveDivider';
import './Contacts.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_REQUEST = import.meta.env.VITE_EMAILJS_TEMPLATE_REQUEST;
const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_REQUEST || !TEMPLATE_REPLY || !PUBLIC_KEY) {
    console.error('EmailJS: una o pi\u00f9 variabili d\'ambiente sono mancanti. Controlla il file .env.');
}

const FormInput = styled('input')(({ownerState}) => ({
    border: `4px solid ${ownerState.primary80}`,
    backgroundColor: ownerState.secondary,
    color: ownerState.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${ownerState.primary600}`,
    },
}));

const FormTextarea = styled('textarea')(({ownerState}) => ({
    border: `4px solid ${ownerState.primary80}`,
    backgroundColor: ownerState.secondary,
    color: ownerState.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${ownerState.primary600}`,
    },
}));

const FormLabel = styled('label')(({ownerState}) => ({
    backgroundColor: ownerState.secondary,
    color: ownerState.primary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0 5px',
    transform: 'translate(25px,50%)',
    display: 'inline-flex',
}));

const DetailsIcon = styled('div')(({ownerState}) => ({
    backgroundColor: ownerState.primary,
    color: ownerState.secondary,
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
        color: ownerState.secondary,
        backgroundColor: ownerState.tertiary,
    },
}));

const SubmitBtn = styled('button')(({ownerState}) => ({
    backgroundColor: ownerState.primary,
    color: ownerState.secondary,
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.08)',
        color: ownerState.secondary,
        backgroundColor: ownerState.tertiary,
    },
}));

function Contacts() {
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [whatsappHover, setWhatsappHover] = useState(false);
    const isSubmittingRef = useRef(false);

    const {theme} = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSuccessOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (isSubmittingRef.current) return;

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        if (trimmedName && trimmedEmail && trimmedSubject && trimmedMessage) {
            if (trimmedName.length < 3) {
                setErrMsg('Nome troppo breve (minimo 3 caratteri)');
                setOpen(true);
                return;
            }
            if (trimmedSubject.length < 5) {
                setErrMsg('Oggetto troppo breve (minimo 5 caratteri)');
                setOpen(true);
                return;
            }
            if (trimmedMessage.length < 10) {
                setErrMsg('Messaggio troppo breve (minimo 10 caratteri)');
                setOpen(true);
                return;
            }
            if (isEmail(trimmedEmail)) {
                isSubmittingRef.current = true;
                setIsSubmitting(true);

                const now = new Date();
                const templateParams = {
                    name: trimmedName,
                    email: trimmedEmail,
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
                        setSuccessOpen(true);
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
                        setErrMsg('Errore nell\'invio. Riprova pi\u00f9 tardi.');
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
                                    <FormLabel ownerState={theme} htmlFor='Name'>Nome</FormLabel>
                                    <FormInput
                                        ownerState={theme}
                                        placeholder='Sigmund Freud'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='Name'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel ownerState={theme} htmlFor='Email'>Email</FormLabel>
                                    <FormInput
                                        ownerState={theme}
                                        placeholder='sigmund@freud.brain'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='Email'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel ownerState={theme} htmlFor='Oggetto'>Oggetto</FormLabel>
                                    <FormInput
                                        ownerState={theme}
                                        placeholder='Appuntamento giorno/mese/anno'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type='subject'
                                        name='Subject'
                                        className='form-input'
                                    />
                                </div>
                                <div className='input-container'>
                                    <FormLabel ownerState={theme} htmlFor='Message'>Messaggio</FormLabel>
                                    <FormTextarea
                                        ownerState={theme}
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
                                        ownerState={theme}
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
                                        textAlign: 'center',
                                    }}
                                    message={errMsg}
                                />
                            </Snackbar>

                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={successOpen}
                                autoHideDuration={5000}
                                onClose={handleSuccessClose}
                            >
                                <SnackbarContent
                                    action={
                                        <React.Fragment>
                                            <IconButton
                                                size='small'
                                                aria-label='close'
                                                color='inherit'
                                                onClick={handleSuccessClose}
                                            >
                                                <CloseIcon fontSize='small'/>
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                        fontFamily: 'var(--primaryFont)',
                                        textAlign: 'center',
                                    }}
                                    message={
                                        <span style={{display: 'block', textAlign: 'center'}}>
                                            Richiesta inviata con successo.<br/>
                                            Controlla la tua casella di posta.
                                        </span>
                                    }
                                />
                            </Snackbar>
                        </div>

                        <div className='contacts-details'>
                            <a href={`tel:${contactsData.phone.replace(" ", "")}`} className='personal-details'>
                                <DetailsIcon ownerState={theme}><FiPhone/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>{contactsData.phone}</p>
                            </a>
                            <a
                                href={`${contactsData.whatsapp}`}
                                className='personal-details'
                                style={{textDecoration: 'none'}}
                            >
                                <DetailsIcon ownerState={theme}><FaWhatsapp/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>
                                    Scrivimi su{' '}
                                    <span
                                        style={{
                                            color: whatsappHover ? theme.primary : theme.tertiary,
                                            textDecoration: whatsappHover ? 'underline' : 'none',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={() => setWhatsappHover(true)}
                                        onMouseLeave={() => setWhatsappHover(false)}
                                    >
                                        WhatsApp
                                    </span>
                                </p>
                            </a>
                            <a href={`mailto:${contactsData.email}`} className='personal-details'>
                                <DetailsIcon ownerState={theme}><FiAtSign/></DetailsIcon>
                                <p style={{color: theme.tertiary}}>{contactsData.email}</p>
                            </a>
                            <div className='personal-details'>
                                <DetailsIcon ownerState={theme}><HiOutlineLocationMarker/></DetailsIcon>
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

            <WaveDivider className="custom-shape-divider-bottom-1757341859" />
        </div>
    );
}

export default Contacts;
