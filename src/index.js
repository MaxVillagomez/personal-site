import React from "react";
import ReactDOM  from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import {App} from './components/index';

const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement)
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)