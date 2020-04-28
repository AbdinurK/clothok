import React, { Component } from "react";

class Filter extends Component {

    buttons = [
        { name: 'zip', title: 'Zip' },
        { name: 'fleece', title: 'Fleece' },
        { name: 'windbreaker', title: 'Windbreaker' }
    ];

    render() {
        const { filter } = this.props;
        const buttons = this.buttons.map(({ name, title }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button" className={`btn ${clazz}`} key={name}>{ title }</button>
            )
        });
        return (
            <div className="btn-group" style={{ marginTop: '20px' }}>
                {buttons}
            </div>
        )
    }
}

export default Filter;
