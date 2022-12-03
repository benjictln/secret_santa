import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Person} from "../Person";
import arrayShuffle from 'array-shuffle';

export default function FinishSendEmail( {persons}: { persons: Person[] }) {

    const randomPersons = arrayShuffle(persons);

    return (
        // TODO: see how to combine stuff!!
        <div>
            { randomPersons.map((person) => (
                <h1>{person.name + " => "}</h1>
                    ))
                }
        </div>
    );
}