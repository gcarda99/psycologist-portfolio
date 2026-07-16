import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';

import './App.css';

const Main = lazy(() => import('./pages/Main/Main'));
const InfoLegale = lazy(() => import('./pages/InfoLegale/InfoLegale'));
// const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
// const ProjectPage = lazy(() => import('./pages/Project/ProjectPage'));

const PageSkeleton = () => (
    <div style={{
        backgroundColor: '#eaeaea',
        minHeight: '100vh',
        width: '100%',
    }} />
);

export function AppContent() {
    return (
        <div className="app">
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
            <BackToTop />
        </div>
    );
}

function App() {
    return (
        <Router
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <AppContent />
        </Router>
    );
}

export default App;
