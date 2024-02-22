import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './router/index.jsx';
import './index.css';
import AuthContextProvider from './contexts/AuthContext.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <Routes/>
    </AuthContextProvider>
);

// reportWebVitals();
