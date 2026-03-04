import React, { useContext, useState } from 'react';
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

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': { color: theme.primary },
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
            background: theme.secondary,
            overflow: 'hidden',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            [t.breakpoints.down('md')]: { width: '12em' },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': { color: theme.tertiary },
            [t.breakpoints.down('md')]: { right: 20, top: 20 },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: 'white',
            color: theme.primary,
            width: '100%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': { background: theme.primary, color: theme.secondary },
            [t.breakpoints.down('md')]: { width: '100%', padding: '0 25px', height: '55px' },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '55%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('md')]: { fontSize: '1.125rem' },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('md')]: { fontSize: '1.385rem' },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => name.replace('Dott.ssa', '');

    const navItems = [
        { to: '/',           icon: <IoHomeSharp className={classes.drawerIcon} />,      label: 'Home' },
        { to: '/#about',     icon: <FaUser className={classes.drawerIcon} />,           label: 'Su di me' },
        { to: '/#education', icon: <HiDocumentText className={classes.drawerIcon} />,  label: 'Formazione' },
        { to: '/#services',  icon: <BsFillGearFill className={classes.drawerIcon} />,  label: 'Servizi' },
        { to: '/#contacts',  icon: <MdPhone className={classes.drawerIcon} />,         label: 'Contatti' },
    ];

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>
                <IoMenuSharp
                    className={classes.navMenu}
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
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />
                <div className='drawer-content' onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.to}
                                custom={i}
                                variants={fadeRightVariant}
                                initial='hidden'
                                animate={open ? 'visible' : 'hidden'}
                            >
                                <NavLink to={item.to} smooth={true} spy='true' duration={2000}>
                                    <div className={classes.drawerItem}>
                                        {item.icon}
                                        <span className={classes.drawerLinks}>{item.label}</span>
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
                            custom={navItems.length}
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
