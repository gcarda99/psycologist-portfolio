import React, {useContext} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import {ThemeContext} from './contexts/ThemeContext';
import {Main, PrivacyPolicy} from './pages'
import {BackToTop} from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

    const {theme} = useContext(ThemeContext);
    console.log("used theme: " + theme.type);

    return (
        <div className="app">
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    {/*<Route path="/blog" element={<BlogPage />} />*/}
                    {/*<Route path="/projects" element={<ProjectPage />} />*/}

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
            <BackToTop/>
        </div>
    );
}

export default App;
