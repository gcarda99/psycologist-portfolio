import React, {useContext} from 'react';
import {motion} from 'framer-motion';

import {ThemeContext} from '../../contexts/ThemeContext';
import {faqData} from '../../data/faqData';
import './Faq.css';

const fadeUpVariant = {
    hidden: {opacity: 0, y: 30},
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {duration: 0.4, delay: index * 0.04}
    })
};

function Faq() {
    const {theme} = useContext(ThemeContext);

    const faqTheme = {
        backgroundColor: theme.secondary,
        '--faq-primary': theme.primary,
        '--faq-primary-30': theme.primary30,
        '--faq-primary-50': theme.primary50,
        '--faq-secondary': theme.secondary,
        '--faq-text': theme.tertiary,
        '--faq-text-muted': theme.tertiary80
    };

    return (
        <section className='faq' id='faq' style={faqTheme}>
            <div className='faq-header'>
                <h2>Domande frequenti</h2>
                <p>
                    Informazioni utili sui servizi, le sedi e le modalità di contatto.
                </p>
            </div>

            <div className='faq-list'>
                {faqData.map((faq, index) => (
                    <motion.div
                        key={faq.id}
                        variants={fadeUpVariant}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.15}}
                        custom={index}
                    >
                        <details className='faq-item' name='homepage-faq'>
                            <summary>
                                <span className='faq-question'>{faq.question}</span>
                                <span className='faq-icon' aria-hidden='true'>+</span>
                            </summary>
                            <div className='faq-answer-wrapper'>
                                <div className='faq-answer'>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </details>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Faq;
