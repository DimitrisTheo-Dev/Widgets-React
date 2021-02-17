import React, { useState } from 'react';

type Item = {
    title: string;
    content: string;
}
type Items = {
    items: Array<Item>;
}
const Accordion = ({ items }: Items) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const onTitleClick = (index: number) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item: Item, index : number) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={ item.title }>
                <div
                     className={`title ${active}`}
                     onClick={ () => onTitleClick(index) }
                >
                     <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className={`content ${active}`}>
                    <p>{ item.content }</p>
                </div>
            </React.Fragment>
        );
    });


    return (
        <div className="ui styled accordion"> { renderedItems } </div>
    );
}


export default Accordion;