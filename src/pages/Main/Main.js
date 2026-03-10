import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import { headerData } from '../../data/headerData'

const About = lazy(() => import('../../components/About/About'))
const Education = lazy(() => import('../../components/Education/Education'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Services = lazy(() => import('../../components/Services/Services'))
const Contacts = lazy(() => import('../../components/Contacts/Contacts'))
const Footer = lazy(() => import('../../components/Footer/Footer'))

// Skeleton minimo: stesso colore di sfondo della landing,
// evita il flash bianco durante il lazy loading delle sezioni
const PageSkeleton = () => (
    <div style={{ backgroundColor: '#eaeaea', minHeight: '100vh' }} />
)

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Landing />

            <Suspense fallback={<PageSkeleton />}>
                <About />
                <Services />
                <Education />
                {/*<Skills />*/}
                {/*<Experience/>*/}
                {/*<Achievement/>*/}
                {/*<Testimonials/>*/}
                {/*<Blog/>*/}
                {/*<Projects />*/}
                <Contacts />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Main
