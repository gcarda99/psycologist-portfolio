import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { footerData } from '../../data/footerData';
import { FaAt, FaEnvelope, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const SocialIcon = styled('a')(({ ownerState }) => ({
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '21px',
    backgroundColor: ownerState.secondary,
    color: ownerState.primary,
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        color: ownerState.secondary,
        backgroundColor: ownerState.tertiary,
    },
}));

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h2 className="footer-title">{footerData.name}</h2>
                    <p className="footer-text">
                        Iscritta all'Albo degli Psicologi della Regione Campania
                        <br />
                        n. <a href={footerData.alboUrl} target="_blank" rel="noreferrer">{footerData.albo}</a>
                        {footerData?.iva && footerData?.iva.trim() !== '' && (
                            <>
                                <br />
                                Partita IVA: {footerData.iva}
                            </>
                        )}
                    </p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-subtitle">Mappa del sito</h3>
                    <ul>
                        <li><a href="/#">Homepage</a></li>
                        <li><a href="/#about">Chi sono</a></li>
                        <li><a href="/#services">Servizi</a></li>
                        <li><a href="/#education">Formazione</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                        <li><a href="/#contacts">Contatti</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-subtitle">Legale</h3>
                    <ul>
                        <li><a href="/info-legale" target="_blank">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-socialmedia-icons'>
                {socialsData.gmail && (
                    <SocialIcon ownerState={theme} href={socialsData.gmail} target='_blank' rel='noreferrer'>
                        <FaEnvelope aria-label='Gmail' />
                    </SocialIcon>
                )}
                {socialsData.pec && (
                    <SocialIcon ownerState={theme} href={socialsData.pec} target='_blank' rel='noreferrer'>
                        <FaAt aria-label='PEC' />
                    </SocialIcon>
                )}
                {socialsData.whatsapp && (
                    <SocialIcon ownerState={theme} href={socialsData.whatsapp} target='_blank' rel='noreferrer'>
                        <FaWhatsapp aria-label='Whatsapp' />
                    </SocialIcon>
                )}
                {socialsData.instagram && (
                    <SocialIcon ownerState={theme} href={socialsData.instagram} target='_blank' rel='noreferrer'>
                        <FaInstagram aria-label='Instagram' />
                    </SocialIcon>
                )}
                {socialsData.tikTok && (
                    <SocialIcon ownerState={theme} href={socialsData.tikTok} target='_blank' rel='noreferrer'>
                        <FaTiktok aria-label='Tiktok' />
                    </SocialIcon>
                )}
                {socialsData.linkedIn && (
                    <SocialIcon ownerState={theme} href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                        <FaLinkedinIn aria-label='LinkedIn' />
                    </SocialIcon>
                )}
            </div>

            <div className="footer-bottom">
                © {__BUILD_YEAR__} {footerData.name} - Tutti i diritti riservati
                <p style={{ color: 'white' }}>
                    Made with
                    <span style={{ color: 'red', margin: '0 0.5rem -1rem 0.5rem' }}>❤</span>
                    by <a style={{ color: 'white', textDecoration: 'underline' }}
                        href='https://www.linkedin.com/in/giuseppe-cardaropoli/'>Giuseppe Cardaropoli</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
