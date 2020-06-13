import React from "react";


const Elements = (props) => {

    const onClickElement = (e) => {
        const element = e.target.name;
        props.onClickElement(element)
    };

    const array = [
        { name: 'body', label: 'Body' },
        { name: 'collar', label: 'Collar' },
        { name: 'sleeves', label: 'Sleeves' },
        { name: 'hood', label: 'Hood' }
    ];


    const elements = array.map((element) => {
        return (
            <button type="button" onClick={onClickElement} name={element.name}>{element.label}</button>
        )
    });

    return (
        <div style={{ width: '60px' }}>
            { elements }
        </div>
    )
};

export default Elements
