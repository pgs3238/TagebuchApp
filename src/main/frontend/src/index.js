import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Registrieren from "./pages/Registrieren";
import Anmelden from "./pages/Anmelden";
import Buch from "./pages/Buch";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

export default function App() {
    const [token, setToken] = useState();

    // if(!token) { return <Anmelden setToken={setToken} /> }
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home/registrierung" element={<Registrieren/>} />
                    <Route path="home/anmelden" element={<Anmelden/>} />

                    <Route path="anmelden" element={<Anmelden />} />
                    <Route path="registrierung" element={<Registrieren />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="buch" element={<Buch />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}