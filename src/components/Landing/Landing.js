import React, { useContext, useMemo } from 'react';
import { Button } from '@mui/material';
import { NavHashLink as NavLink } from '@xzar90/react-router-hash-link';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import WaveDivider from '../WaveDivider/WaveDivider';

import { FaEnvelope, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

function Landing() {
    const { theme } = useContext(ThemeContext);

    const contactBtnStyle = useMemo(() => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '140px',
        height: '45px',
        fontSize: '1rem',
        fontWeight: '500',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            transform: 'scale(1.08)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
            border: `3px solid ${theme.tertiary}`
        }
    }), [theme]);

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.gmail && (
                            <a href={socialsData.gmail} target='_blank' rel='noreferrer'>
                                <FaEnvelope
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Gmail'
                                />
                            </a>
                        )}
                        {socialsData.whatsapp && (
                            <a href={socialsData.whatsapp} target='_blank' rel='noreferrer'>
                                <FaWhatsapp
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Whatsapp'
                                />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                        {socialsData.tikTok && (
                            <a href={socialsData.tikTok} target='_blank' rel='noreferrer'>
                                <FaTiktok
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='TikTok'
                                />
                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                    </div>
                </div>

                <WaveDivider className="custom-shape-divider-top-1757341859" />

                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{ borderColor: theme.secondary }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6 className='lcr--content--title'>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.description}</p>
                        <h6 className='lcr--content--author'>~ Robert Louis Stevenson</h6>

                        <div className='lcr-buttoncontainer'>
                            <div className='lcr-buttons'>
                                <NavLink
                                    to='/#contacts'
                                    smooth={true}
                                    spy={true}
                                    duration={2000}
                                >
                                    <Button sx={contactBtnStyle}>
                                        Contatti
                                    </Button>
                                </NavLink>
                            </div>
                        </div>

                        <div className="arrow-scroll">
                            <div className='arrow'></div>
                            <div className='arrow'></div>
                            <div className='arrow'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
