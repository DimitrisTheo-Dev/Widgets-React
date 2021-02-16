import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';


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
    const [selected, setSelected] = useState<object>(options[0]);
    return (
        <div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange = {setSelected}

            />
        </div>
    );
}