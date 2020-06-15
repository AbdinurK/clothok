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
        { name: 'zips', label: 'Zips' },
        { name: 'insideLine', label: 'Inside Lining' },
        { name: 'hoodLine', label: 'Hood Line' },
        { name: 'hood', label: 'Hood' },
        { name: 'tape', label: 'Tape' },
    ];


    const elements = array.map((element) => {
        return (
            <button type="button" onClick={onClickElement}
                    name={element.name}
                    key={element.name}
                    style={{ width: '60px', marginBottom: '2px' }}
            >
                {element.label}
            </button>
        )
    });

    return (
        <div style={{ width: '60px' }}>
            { elements }
        </div>
    )
};

export default Elements
