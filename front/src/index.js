import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider  } from'react-router-dom';
import router from '../src/router/index.js';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// reportWebVitals();
