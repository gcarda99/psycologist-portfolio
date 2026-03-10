import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleService.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SingleService({ id, title, icon }) {
    const { theme } = useContext(ThemeContext);
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="single-service"
            style={{
                backgroundColor: hovered ? '#1a1a1a' : theme.primary400,
            }}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="service-content" style={{ color: theme.tertiary }}>
                <span className="service-icon">{icon}</span>
                <h4 style={{ color: theme.secondary }}>{title}</h4>
            </div>
        </motion.div>
    );
}

export default SingleService;
