import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import { headerData } from '../../data/headerData'

const About = lazy(() => import('../../components/About/About'))
const Services = lazy(() => import('../../components/Services/Services'))
const Education = lazy(() => import('../../components/Education/Education'))
const Contacts = lazy(() => import('../../components/Contacts/Contacts'))
const Footer = lazy(() => import('../../components/Footer/Footer'))

// Placeholder minimo: mantiene il colore di sfondo ed evita flash bianchi
const SectionSkeleton = () => (
    <div style={{ backgroundColor: '#eaeaea', minHeight: '100px' }} />
)

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Landing />

            <Suspense fallback={<SectionSkeleton />}>
                <About />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Services />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Education />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Contacts />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default Main
