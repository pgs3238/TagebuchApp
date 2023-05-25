
import React, {useState} from 'react';
import './Home.css'
import {useNavigate} from "react-router-dom";

function Layout() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    const registrierung = () => {
        navigate("/home/registrierung");
    }

    const anmelden = () => {
        navigate("/home/anmelden");
    }

    return (
        <form onSubmit={handleSubmit}>


            <br/>
            <h2>Was ist Die Tagebuch-App?</h2>

            <h3><center>Hier hast du die Möglichkeit dein eigenes Tagebuch zu erstellen </center>
            </h3>

            <div className="registrierung">
                <input
                    type ="button"
                    id="registrierung"
                    value="Registrieren"
                    onClick={registrierung}/>
            </div>

            <br/>
            <br/>

            <div className="anmelden">
                <h3 className="a">Du hast bereits einen Account bei uns?</h3>
                <input
                    type="button"
                    id="anmelden"
                    value="Anmelden"
                    onClick={anmelden}/>

            </div>




        </form>




    );
}

export default Layout;