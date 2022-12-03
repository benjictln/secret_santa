import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DeletableChips from "./components/DeletableChips";


class Person {
    name: string;
    email: string;

    constructor(theName: string, theEmail: string) {
        this.name = theName;
        this.email = theEmail;
    }
}

function App() {


    const [persons, setPersons] = useState([
        new Person("Ben", "ben@gmail.com"),
        new Person("tom1", "tom@gmail.com"),
        new Person("tom2", "tom@gmail.com"),
        new Person("tom3", "tom@gmail.com"),
        new Person("tom4", "tom@gmail.com"),
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {persons.map( (person, index) => (
                    <DeletableChips name={person.name} handleDelete={ () => {

                        setPersons(persons.filter((_, index2) =>
                            index2 !== index
                        ));

                    }}/>
                ))}
            </header>
        </div>
    );
}

export default App;
