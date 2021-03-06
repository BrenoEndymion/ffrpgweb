import React from 'react';

export default function Header(props){

    const {title, children} = props
    
    return (
        <header>
            <h1>
                {title}
                <br />
                {children}
            </h1>
        </header>
    );
}