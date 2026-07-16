import React, { useContext, useState, useMemo } from 'react';
import { NavHashLink as NavLink } from '@xzar90/react-router-hash-link';
import { motion } from 'framer-motion';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaQuestionCircle, FaUser } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

const fadeRightVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.22, delay: i * 0.05 },
    }),
};

const NAV_ITEMS = [
    { to: '/',           Icon: IoHomeSharp,    label: 'Home' },
    { to: '/#about',     Icon: FaUser,         label: 'Su di me' },
    { to: '/#services',  Icon: BsFillGearFill, label: 'Servizi' },
    { to: '/#education', Icon: HiDocumentText, label: 'Formazione' },
    { to: '/#faq',       Icon: FaQuestionCircle, label: 'FAQ' },
    { to: '/#contacts',  Icon: MdPhone,        label: 'Contatti' },
];

const shortname = (name) => name.replace('Dott.ssa', '');

function NavItem({ to, Icon, label, theme, onClose, custom, open }) {
    const [hovered, setHovered] = useState(false);

    const itemStyle = useMemo(() => ({
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
        border: `2px solid ${hovered ? '#111' : theme.primary}`,
        backgroundColor: hovered ? '#111' : theme.primary,
        color: hovered ? '#fff' : theme.secondary,
        transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out, border-color 250ms ease-in-out',
        cursor: 'pointer',
    }), [hovered, theme.primary, theme.secondary]);

    return (
        <motion.div
            custom={custom}
            variants={fadeRightVariant}
            initial='hidden'
            animate={open ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={onClose}
            style={{ willChange: 'transform, opacity' }}
        >
            <NavLink to={to} smooth={true}>
                <div style={itemStyle}>
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
    );
}

function Navbar() {
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [closeHovered, setCloseHovered] = useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

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
        willChange: 'transform',
        transform: 'translateZ(0)',
    }), [theme.secondary]);

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>
                <Box
                    component={IoMenuSharp}
                    sx={{
                        fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
                        cursor: 'pointer',
                        transform: 'translateY(-10px)',
                        transition: 'color 0.3s',
                        color: theme.tertiary,
                    }}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={handleDrawerClose}
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
                            willChange: 'transform',
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
                            <NavItem
                                key={to}
                                to={to}
                                Icon={Icon}
                                label={label}
                                theme={theme}
                                onClose={handleDrawerClose}
                                custom={i}
                                open={open}
                            />
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
