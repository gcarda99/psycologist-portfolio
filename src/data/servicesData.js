/* eslint-disable */
import {BsClipboardData} from "react-icons/bs";
import {FaChalkboardTeacher, FaChild} from "react-icons/fa";
import {LuBrain} from "react-icons/lu";
import {MdCastForEducation, MdFamilyRestroom, MdOutlinePsychologyAlt} from "react-icons/md";
import {GiBrainstorm} from "react-icons/gi";
import {FaHandHoldingMedical, FaHandsHoldingChild} from "react-icons/fa6";


export const servicesData = [
    {
        id: 1,
        title: 'Supporto Psicologico (bambini, coppie, adulti)',
        icon: <MdOutlinePsychologyAlt/>
    },
    {
        id: 2,
        title: 'Parent Training',
        icon: <MdFamilyRestroom/>
    },
    {
        id: 3,
        title: 'Potenziamento Abilità Cognitive',
        icon: <GiBrainstorm/>
    },
    {
        id: 4,
        title: 'Potenziamento degli Apprendimenti',
        icon: <LuBrain/>
    },
    {
        id: 5,
        title: 'Tutoring DSA e BES',
        icon: <FaChalkboardTeacher/>
    },

    {
        id: 6,
        title: 'Supporto alla Genitorialità',
        icon: <FaHandsHoldingChild/>
    },
    {
        id: 7,
        title: 'Orientamento Scolastico e Lavorativo',
        icon: <MdCastForEducation/>
    },
    {
        id: 8,
        title: 'Trattamento ADHD (adulti e bambini)',
        icon: <FaChild/>
    },
    {
        id: 9,
        title: 'Valutazioni Psicodiagnostiche',
        icon: <BsClipboardData/>
    },
    {
        id: 10,
        title: 'Riabilitazione Neuropsicologica (adulti e bambini)',
        icon: <FaHandHoldingMedical/>
    }
]