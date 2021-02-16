import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
const items = [
    {
        title: 'What is React?',
        content:'React is a front end library '
    },
    {
        title: 'Why use react?',
        content:'Why not its dope'
    },
    {
        title:"I ran out of thing to say",
        content: "Alright then bye"
    }
]

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
}