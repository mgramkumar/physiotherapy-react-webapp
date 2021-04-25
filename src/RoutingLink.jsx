import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Treatment from './Treatment';
import ContactUs from './ContactUs';
import DailyLedger from './DailyLedger';
import PatientDetails from './PatientDetails';
import LoginPage from './LoginPage';

export default function RoutingLink() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/treatment">
                    <Treatment/>
                </Route>
                <Route path="/contact-us">
                    <ContactUs/>
                </Route>
                <Route path="/daily-ledger">
                    <DailyLedger/>
                </Route>
                <Route path="/patient-details">
                    <PatientDetails/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </BrowserRouter>
        </div>
    )
}
