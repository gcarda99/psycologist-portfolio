import React, { useContext, useState, useMemo } from 'react';
import { NavHashLink as NavLink } from '@xzar90/react-router-hash-link';
import { motion } from 'framer-motion';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import brain from '../../assets/webp/brain.webp';

const fadeRightVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, delay: i * 0.08 },
    }),
};

const NAV_ITEMS = [
    { to: '/',           Icon: IoHomeSharp,    label: 'Home' },
    { to: '/#about',     Icon: FaUser,         label: 'Su di me' },
    { to: '/#services',  Icon: BsFillGearFill, label: 'Servizi' },
    { to: '/#education', Icon: HiDocumentText, label: 'Formazione' },
    { to: '/#contacts',  Icon: MdPhone,        label: 'Contatti' },
];

const shortname = (name) => name.replace('Dott.ssa', '');

const getItemStyle = (isHovered, theme) => ({
    margin: '1.2rem auto',
    borderRadius: '78.8418px',
    width: '100%',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 1.4rem',
    boxSizing: 'border-box',
    gap: '0.6rem',
    border: `2px solid ${isHovered ? '#111' : theme.primary}`,
    backgroundColor: isHovered ? '#111' : theme.primary,
    color: isHovered ? '#fff' : theme.secondary,
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out, border-color 250ms ease-in-out',
    cursor: 'pointer',
});

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [closeHovered, setCloseHovered] = useState(false);

    const handleDrawerOpen = () => { setOpen(true); setHandleDrawer(); };
    const handleDrawerClose = () => { setOpen(false); setHandleDrawer(); };

    const drawerPaperStyle = useMemo(() => ({
        background: theme.secondary,
        padding: '0em 1.8em',
        width: '14em',
        fontFamily: 'var(--primaryFont)',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        overflow: 'hidden',
        borderTopLeftRadius: '40px',
        borderBottomLeftRadius: '40px',
    }), [theme.secondary]);

    return (
        <>
            {/* Burger icon sticky — sempre visibile durante lo scroll */}
            <div className='navbar--burger-sticky'>
                <Box
                    component={IoMenuSharp}
                    sx={{
                        fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        color: theme.tertiary,
                    }}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>

            {/* Navbar originale con nome — rimane absolute in cima */}
            <div className='navbar'>
                <div className='navbar--container'>
                    <h1 style={{ color: theme.secondary }}>
                        {shortname(headerData.name)}
                    </h1>
                    {/* Placeholder per mantenere il layout della navbar originale */}
                    <Box sx={{ width: { xs: '2rem', md: '2.5rem' } }} />
                </div>
            </div>

            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') handleDrawerClose();
                    else if (reason !== 'escapeKeyDown') handleDrawerClose();
                }}
                anchor='right'
                open={open}
                PaperProps={{ style: drawerPaperStyle }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <motion.div
                        style={{
                            position: 'absolute',
                            right: 40,
                            top: 40,
                            display: 'inline-flex',
                            cursor: 'pointer',
                            color: closeHovered ? '#111' : theme.primary,
                            transition: 'color 250ms ease-in-out',
                        }}
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={() => setCloseHovered(true)}
                        onHoverEnd={() => setCloseHovered(false)}
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    >
                        <CloseIcon style={{ fontSize: '2rem', fontWeight: 'bold' }} />
                    </motion.div>
                </div>
                <br />
                <div className='drawer-content'>
                    <div className='navLink--container'>
                        {NAV_ITEMS.map(({ to, Icon, label }, i) => (
                            <motion.div
                                key={to}
                                custom={i}
                                variants={fadeRightVariant}
                                initial='hidden'
                                animate={open ? 'visible' : 'hidden'}
                                whileHover={{ scale: 1.05 }}
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                onClick={handleDrawerClose}
                            >
                                <NavLink to={to} smooth={true} spy='true' duration={2000}>
                                    <div style={getItemStyle(hoveredIndex === i, theme)}>
                                        <Box
                                            component={Icon}
                                            sx={{
                                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                                flexShrink: 0,
                                                width: '1.6rem',
                                                textAlign: 'center',
                                            }}
                                        />
                                        <span style={{
                                            fontFamily: 'var(--primaryFont)',
                                            fontSize: 'clamp(1.05rem, 1.2rem, 1.2rem)',
                                            fontWeight: 600,
                                            whiteSpace: 'nowrap',
                                            flex: 1,
                                            textAlign: 'center',
                                        }}>
                                            {label}
                                        </span>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </div>
                    <div className='navbar--image-container'>
                        <motion.img
                            src={brain}
                            alt='brain'
                            className='navbar--image'
                            variants={fadeRightVariant}
                            custom={NAV_ITEMS.length}
                            initial='hidden'
                            animate={open ? 'visible' : 'hidden'}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default Navbar;
