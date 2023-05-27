import React, {useState} from 'react';
import cookies from "js-cookie";
import './Buch.css'
import {useNavigate} from "react-router-dom";


let books = [
    {buchId: "1", name:"Lindas Tagebuch", etc:"Mein erstes Online Tagebuch"},
    {buchId: "2", name:"TBuch23", etc:"2023"}
]

function Layout() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const [rows, setRows] = useState(books);

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

    const Row = (props) => {
        const {buchId, name, etc} = props
        return(<tr>
            <td>{buchId}</td>
            <td>{name}</td>
            <td>{etc}</td>
        </tr>)
    }

    const Table = (props) => {
        const{data} = props
        return (<center><table>
            <thead>
            <td>Buch Id</td>
            <td>Buchname</td>
            <td>Info</td>
            </thead>
            <tbody>
            {data.map(row =>
                <Row buchId = {row.buchId}
                     name = {row.name}
                     etc = {row.etc} />
            )}
            </tbody>
        </table></center>)
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Liste der Tagebücher:</h2>
            <br/>
            <br/>
            <div className="demo">
                <label>Das ist eine Demo Tabelle und symbolisiert nur wie der Endzustand hätte aussehen koennen</label>
            </div>
            <br/>
            <Table data={rows}/>
            <br/>
            <h3>Neues Tagebuch erstellen:</h3>
            <div className="tagebuchname">
                <label> Wie soll das Tagebuch heißen? </label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
                <input
                    type = "text"
                    placeholder="Mein Tagebuch"
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