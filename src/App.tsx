import React, {useState} from 'react';
import './App.css';
import {RegisterPersonPage} from "./components/RegisterPersonPage";
import FinishSendEmail from "./components/FinishSendEmail";
import {Person} from "./Person";


const STAGE_REGISTER_PERSONS = 0;
const STAGE_SENDING_EMAIL = 1;

function App() {

    const [persons, setPersons] = useState<Person[]>([]);

    const prepareSendingEmail = (persons: Person[]) => {
        setPersons(persons)
        setStage(STAGE_SENDING_EMAIL)

    }
    const [stage, setStage] = useState(STAGE_REGISTER_PERSONS)
    if (stage === STAGE_REGISTER_PERSONS) {
        return (<RegisterPersonPage prepareSendingEmail={prepareSendingEmail}/>)
    }
    return (<FinishSendEmail persons={persons}/>)
}

export default App;
