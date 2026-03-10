import React, {useContext} from 'react';
import {Button, useMediaQuery} from '@mui/material';
import {NavHashLink as NavLink} from '@xzar90/react-router-hash-link';

import './Landing.css';
import {ThemeContext} from '../../contexts/ThemeContext';
import {headerData} from '../../data/headerData';
import {socialsData} from '../../data/socialsData';

import {FaEnvelope, FaInstagram, FaLinkedin, FaTiktok} from 'react-icons/fa6';
import {FaWhatsapp} from "react-icons/fa";

function Landing() {
    const {theme, drawerOpen} = useContext(ThemeContext);

    const isMobile = useMediaQuery('(max-width: 600px)');

    const contactBtnStyle = {
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
    };

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{backgroundColor: theme.primary}}
                >
                    <div className='lcl--content'>
                        {socialsData.gmail && (
                            <a href={socialsData.gmail} target='_blank' rel='noreferrer'>
                                <FaEnvelope
                                    className='landing--social'
                                    style={{color: theme.secondary}}
                                    aria-label='Gmail'
                                />
                            </a>
                        )}
                        {socialsData.whatsapp && (
                            <a href={socialsData.whatsapp} target='_blank' rel='noreferrer'>
                                <FaWhatsapp
                                    className='landing--social'
                                    style={{color: theme.secondary}}
                                    aria-label='Whatsapp'
                                />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                <FaInstagram
                                    className='landing--social'
                                    style={{color: theme.secondary}}
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                        {socialsData.tikTok && (
                            <a href={socialsData.tikTok} target='_blank' rel='noreferrer'>
                                <FaTiktok
                                    className='landing--social'
                                    style={{color: theme.secondary}}
                                    aria-label='TikTok'
                                />
                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin
                                    className='landing--social'
                                    style={{color: theme.secondary}}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                    </div>
                </div>
                {isMobile && (
                    <div className="custom-shape-divider-top-1757341859">
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
                             className="transition duration-300 ease-in-out delay-150">
                            <path
                                d="M 0,400 L 0,75 C 74.44102564102565,81.77435897435898 148.8820512820513,88.54871794871795 238,80 C 327.1179487179487,71.45128205128205 430.9128205128204,47.579487179487174 520,38 C 609.0871794871796,28.420512820512823 683.4666666666667,33.13333333333333 751,43 C 818.5333333333333,52.86666666666667 879.220512820513,67.8871794871795 958,80 C 1036.779487179487,92.1128205128205 1133.651282051282,101.31794871794871 1217,100 C 1300.348717948718,98.68205128205129 1370.1743589743592,86.84102564102565 1440,75 L 1440,400 L 0,400 Z"
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
                )}
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0.7' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{backgroundColor: theme.secondary}}
                >
                    <div
                        className='lcr--content'
                        style={{color: theme.tertiary}}
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
                                    spy='true'
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
