import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Person} from "../Person";
import arrayShuffle from 'array-shuffle';
import {Box} from "@mui/material";
// import emailjs from '@emailjs/browser';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FinishSendEmail( {persons}: { persons: Person[] }) {

    const randomPersons = arrayShuffle(persons);

    function sendEmail({email, body}: {email: string, body: string}) {
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // TODO: register in app, but need to give access..
    }


    randomPersons.forEach((person, index) => {
        let nextPerson = getNextPersonFor(index);
        let body = "Hello, " + person.name + " (" + person.email + "),\n" +
            "You have to buy a gift 🎁 for: " + nextPerson.name + " (" + nextPerson.email + ").\n" +
            "Happy Christmas!! 🎅🎄";
        let email = person.email
        sendEmail({email, body})
    })


    function getNextPersonFor(index: number): Person {
        if (randomPersons.length === index + 1) {
            return randomPersons[0];
        }
        return randomPersons[index + 1]
    }
    return (
        // TODO: see how to combine stuff!!
        <Box className="App-header">
            { randomPersons.map((person, index) => (
                <Box><Chip label={ person.name }/>
                    <ArrowForwardIcon />
                    <Chip label={ getNextPersonFor(index).name }/>
                </Box>
                    ))
                }
        </Box>
    );
}