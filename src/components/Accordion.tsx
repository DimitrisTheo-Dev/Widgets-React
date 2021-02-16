import React, { useState } from 'react';

interface Items {
    title: string;
    content: string;

}

const Accordion = ({ items }:  any): object => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const onTitleClick = (index: number) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item: Items, index : number) => {
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