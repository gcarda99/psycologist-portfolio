import React from 'react';
import { makeStyles } from '@mui/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

import placeholder from '../../../assets/webp/placeholder.webp';
import './SingleProject.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const useStyles = makeStyles(() => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <motion.div
            key={id}
            className="singleProject"
            style={{ backgroundColor: theme.primary400 }}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="projectContent">
                <h2
                    id={name.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {name}
                </h2>
                <img src={image ? image : placeholder} alt={name} />
                <div className="project--showcaseBtn">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.iconBtn}
                        aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-demo`}
                    >
                        <FaPlay
                            id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                            className={classes.icon}
                            aria-label="Demo"
                        />
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.iconBtn}
                        aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${name.replace(' ', '-').toLowerCase()}-code`}
                            className={classes.icon}
                            aria-label="Code"
                        />
                    </a>
                </div>
            </div>
            <p
                className="project--desc"
                style={{ background: theme.secondary, color: theme.tertiary }}
            >
                {desc}
            </p>
            <div
                className="project--lang"
                style={{ background: theme.secondary, color: theme.tertiary80 }}
            >
                {tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}

export default SingleProject;
