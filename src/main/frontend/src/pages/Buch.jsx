import React, {useState} from 'react';
import cookies from "js-cookie";
import './Buch.css'
import {useNavigate} from "react-router-dom";

function Layout() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const ausloggen = () => {
        cookies.remove("quarkus-credential");
        cookies.remove("username");
        navigate("/anmelden");
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        //TODO
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Erstellen Sie ein neuen Tagebuchs:</h2>
            <br/>
            <br/>
            <div className="tagebuchname">
                <label> Wie soll das Tagebuch heißen? </label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
                <input
                    type = "text"
                    placeholder="Tagebuch"
                    id = "tname"
                    name = "tagebuchName"
                    onChange = {handleChange}
                />
            </div>
            <br/>
            <div className="bsave">
                <input type="submit" id="savebook" value="Tagebuch speichern"/>
            </div>
            <br/>
            <div className="logout">
                <input type="button" id="abbrechen" value="Logout" onClick={ausloggen}/>
            </div>
        </form>
    );
}

export default Layout;