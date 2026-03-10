import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';

import './App.css';

const Main = lazy(() => import('./pages/Main/Main'));
const InfoLegale = lazy(() => import('./pages/InfoLegale/InfoLegale'));
// const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
// const ProjectPage = lazy(() => import('./pages/Project/ProjectPage'));

// Mostrato solo se il chunk della pagina non è ancora disponibile (es. 3G lenta).
// Evita la pagina completamente bianca al primo caricamento.
const PageSkeleton = () => (
    <div style={{
        backgroundColor: '#eaeaea',
        minHeight: '100vh',
        width: '100%',
    }} />
);

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="app">
            <Router>
                <ScrollToTop />
                <Suspense fallback={<PageSkeleton />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/info-legale" element={<InfoLegale />} />
                        {/* <Route path="/blog" element={<BlogPage />} /> */}
                        {/* <Route path="/projects" element={<ProjectPage />} /> */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </Router>
            <BackToTop />
        </div>
    );
}

export default App;
