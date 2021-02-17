import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Route from './components/Route';
import Header from "./components/Header";

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
];

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'A Shade of Blue',
        value:'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange = {setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}