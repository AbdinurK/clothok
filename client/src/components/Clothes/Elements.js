import React from "react";


const Elements = (props) => {

    const onClickElement = (e) => {
        const element = e.target.name;
        props.onClickElement(element)
    };

    return (
        <div style={{ width: '60px' }}>
            <button type="button" onClick={onClickElement} name="body">Body</button>
            <button type="button" onClick={onClickElement} name="collar">Collar</button>
            <button type="button" onClick={onClickElement} name="sleeves">Sleeves</button>
            <button type="button" onClick={onClickElement} name="hood">Hood</button>
        </div>
    )
};

export default Elements
