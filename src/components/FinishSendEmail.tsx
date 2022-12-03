import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Person} from "../Person";
import arrayShuffle from 'array-shuffle';
import {private_prefix_email} from "../private_vars";

export default function FinishSendEmail( {persons}: { persons: Person[] }) {

    const randomPersons = arrayShuffle(persons);


    function sendTheEmails()
    randomPersons.map((person, index) => {
        let email = private_prefix_email + "+" + person.name + "@gmail.com"
        let nextPerson = getNextPersonFor(index);
        let body = "Hello, " + person.name + " (" + person.email + ")" + ",\n" +
            "You have to buy a gift 🎁 for: " + nextPerson.name + " (" + nextPerson.email + ").\n" +
            "Happy Christmas!! 🎅🎄"
    })
    function getNextPersonFor(index: number): Person {
        if (randomPersons.length === index + 1) {
            return randomPersons[0];
        }
        return randomPersons[index + 1]
    }
    return (
        // TODO: see how to combine stuff!!
        <div>
            { randomPersons.map((person, index) => (
                <div>{ person.name + " => " + (getNextPersonFor(index).name)
                }</div>
                    ))
                }
        </div>
    );
}