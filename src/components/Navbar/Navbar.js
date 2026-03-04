import React, { useContext, useState, useMemo } from 'react';
import { NavHashLink as NavLink } from '@xzar90/react-router-hash-link';
import { motion } from 'framer-motion';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import brain from '../../assets/png/brain.png';

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
    { to: '/#education', Icon: HiDocumentText, label: 'Formazione' },
    { to: '/#services',  Icon: BsFillGearFill, label: 'Servizi' },
    { to: '/#contacts',  Icon: MdPhone,        label: 'Contatti' },
];

const useStyles = makeStyles((t) => ({
    navMenu: {
        fontSize: '2.5rem',
        cursor: 'pointer',
        transform: 'translateY(-10px)',
        transition: 'color 0.3s',
        [t.breakpoints.down('md')]: { fontSize: '2.5rem' },
        [t.breakpoints.down('sm')]: { fontSize: '2rem' },
    },
    MuiDrawer: {
        padding: '0em 1.8em',
        width: '14em',
        fontFamily: 'var(--primaryFont)',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        overflow: 'hidden',
        borderTopLeftRadius: '40px',
        borderBottomLeftRadius: '40px',
        [t.breakpoints.down('md')]: { width: '12em' },
    },
    closebtnIcon: {
        fontSize: '2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        position: 'absolute',
        right: 40,
        top: 40,
        transition: 'color 0.2s',
        [t.breakpoints.down('md')]: { right: 20, top: 20 },
    },
    drawerIcon: {
        fontSize: '1.6rem',
        [t.breakpoints.down('md')]: { fontSize: '1.385rem' },
    },
    drawerLinks: {
        fontFamily: 'var(--primaryFont)',
        width: '55%',
        fontSize: '1.3rem',
        fontWeight: 600,
        [t.breakpoints.down('md')]: { fontSize: '1.125rem' },
    },
}));

const shortname = (name) => name.replace('Dott.ssa', '');

// base:  white bg  + purple text/icon
// hover: black bg  + white  text/icon
const getItemStyle = (isHovered, theme) => ({
    margin: '1.5rem auto',
    borderRadius: '78.8418px',
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 30px',
    boxSizing: 'border-box',
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
    const classes = useStyles();

    const handleDrawerOpen = () => { setOpen(true); setHandleDrawer(); };
    const handleDrawerClose = () => { setOpen(false); setHandleDrawer(); };

    const drawerPaperStyle = useMemo(() => ({
        background: theme.secondary,
    }), [theme.secondary]);

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>
                <IoMenuSharp
                    className={classes.navMenu}
                    style={{ color: theme.tertiary }}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') handleDrawerClose();
                    else if (reason !== 'escapeKeyDown') handleDrawerClose();
                }}
                anchor='right'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                PaperProps={{ style: drawerPaperStyle }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        style={{ color: theme.primary }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
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
                                        <Icon className={classes.drawerIcon} />
                                        <span className={classes.drawerLinks}>
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
        </div>
    );
}

export default Navbar;
