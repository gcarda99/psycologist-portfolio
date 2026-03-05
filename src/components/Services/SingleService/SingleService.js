import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleService.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SingleService({ id, title, icon }) {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            key={id}
            className="single-service"
            style={{ backgroundColor: theme.primary400 }}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="service-content" style={{ color: theme.tertiary }}>
                <i className="service-icon">{icon}</i>
                <h4 style={{ color: theme.secondary }}>{title}</h4>
            </div>
        </motion.div>
    );
}

export default SingleService;
