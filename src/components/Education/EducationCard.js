import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function EducationCard({ id, institution, course, grade, thesis, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        educationCard: {
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
            className={`education-card ${classes.educationCard}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details">
                <h6 className="years" style={{ color: theme.primary }}>{startYear} - {endYear}</h6>
                <h4 className="course" style={{ color: theme.tertiary }}>{course}</h4>
                <h5 className="institution" style={{ color: theme.tertiary80 }}>{institution}</h5>
                <h6 className="grade" style={{ color: theme.tertiary }}><strong>Voto</strong>: {grade}</h6>
                <h6 className="grade" style={{ color: theme.tertiary80 }}><strong>Tesi</strong>: <em>{thesis}</em></h6>
            </div>
        </motion.div>
    );
}

export default EducationCard;
