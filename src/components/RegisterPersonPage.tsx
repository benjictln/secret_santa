import React, {useState} from "react";
import {Person} from "../Person";
import logo from "../logo.svg";
import {Box, Button, Snackbar, TextField} from "@mui/material";
import {AccountCircle, AddCircleRounded} from "@mui/icons-material";
import DeletableChips from "./DeletableChips";
import SendIcon from '@mui/icons-material/Send';

export function RegisterPersonPage( { prepareSendingEmail }: { prepareSendingEmail: (persons: Person[]) => void} ) {
    const [currentName, setCurrentName] = useState("")
    const [currentEmail, setCurrentEmail] = useState("")
    const [persons, setPersons] = useState<Person[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorMessage("");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />


                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                    <TextField sx={{ m: 2 }}
                               label="Name" variant="standard" value={currentName}
                               onChange={(event) => setCurrentName(event.target.value)}/>

                    <TextField sx={{ m: 2 }}
                               label="Email" variant="standard" value={currentEmail}
                               onChange={(event) => setCurrentEmail(event.target.value)}/>
                    <AddCircleRounded sx={{ m: 2 }}
                                      onClick={() => {
                        if (currentName.trim() === "") {
                            setErrorMessage("The name cannot be empty.")
                            return
                        }
                        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        if (!expression.test(currentEmail)) {
                            setErrorMessage("The email is incorrect.")
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

                <Button variant="contained" endIcon={<SendIcon />}
                        onClick={ () => prepareSendingEmail(persons)}>
                    Send emails
                </Button>
            </header>

            <Snackbar
                open={errorMessage !== ""}
                autoHideDuration={6000}
                onClose={handleClose}
                message={errorMessage}
            />

        </div>
    );
}