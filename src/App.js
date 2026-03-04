import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
// const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
// const ProjectPage = lazy(() => import('./pages/Project/ProjectPage'));

function App() {
    const { theme } = useContext(ThemeContext);
    console.log('used theme: ' + theme.type);

    return (
        <div className="app">
            <Router>
                <ScrollToTop />
                <Suspense fallback={<div />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
