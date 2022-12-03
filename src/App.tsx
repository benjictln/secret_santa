import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DeletableChips from "./components/DeletableChips";
import {Box, InputAdornment, Snackbar, TextField} from "@mui/material";
import {AccountCircle, AddCircleRounded} from "@mui/icons-material";

class Person {
    name: string;
    email: string;

    constructor(theName: string, theEmail: string) {
        this.name = theName;
        this.email = theEmail;
    }
}

function App() {

    const [currentName, setCurrentName] = useState("")
    const [currentEmail, setCurrentEmail] = useState("")
    const [persons, setPersons] = useState([
        new Person("Ben", "ben@gmail.com"),
        new Person("tom1", "tom@gmail.com"),
        new Person("tom2", "tom@gmail.com"),
        new Person("tom3", "tom@gmail.com"),
        new Person("tom4", "tom@gmail.com"),
    ]);
    const [openError, setOpenError] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />


                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                    <TextField label="Name" variant="standard" value={currentName}
                               onChange={(event) => setCurrentName(event.target.value)}/>

                    <TextField label="Email" variant="standard" value={currentEmail}
                               onChange={(event) => setCurrentEmail(event.target.value)}/>
                    <AddCircleRounded onClick={() => {
                        if (currentName.trim() === "") {
                            setOpenError(true)
                            return
                        }
                        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        if (!expression.test(currentEmail)) {
                            setOpenError(true)
                            return
                        }

                        setPersons(persons.concat(new Person(currentName, currentEmail)))
                        setCurrentName("")
                        setCurrentEmail("")

                            }
                    }/>
                </Box>



                {persons.map( (person, index) => (
                    <DeletableChips name={person.name} handleDelete={ () => {

                        setPersons(persons.filter((_, index2) =>
                            index2 !== index
                        ));

                    }}/>
                ))}
            </header>

            <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Wrong inputs"
                // action={action}
            />
        </div>
    );
}

export default App;
