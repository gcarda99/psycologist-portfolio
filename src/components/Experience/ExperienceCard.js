import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import './Experience.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ExperienceCard({ id, company, jobTitle, startYear, endYear, description }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <motion.div
            key={id}
            className={`experience-card ${classes.experienceCard}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
            </div>
            <div className="experience-details">
                <h6 className="years" style={{ color: theme.primary }}>{startYear} - {endYear}</h6>
                <h4 className="jobTitle" style={{ color: theme.tertiary }}>{jobTitle}</h4>
                <h5 className="company" style={{ color: theme.tertiary80 }}>{company}</h5>
                <h6 className="description" style={{ color: theme.tertiary80 }}>{description}</h6>
            </div>
        </motion.div>
    );
}

export default ExperienceCard;
