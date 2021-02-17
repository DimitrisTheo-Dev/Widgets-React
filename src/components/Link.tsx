import React from 'react';
 //TODO add types
const Link = ({ className, href, children }) => {
    const onClick = (event: MouseEvent) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        //prevents full page reload
        event.preventDefault();
        window.history.pushState({}, '', href);

        //tell those dropdown componets that the url has cnhanged
        const navEvent = new  PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a className={ className } href={ href }> { children } </a>;
}

export default Link;