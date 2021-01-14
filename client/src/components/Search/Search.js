import React, {useState} from "react";
import styled from 'styled-components'

const StyledSearch = styled.input`
    padding: 10px;
    position: relative;
    left: 0;
    font-size: 1.2rem;
    outline: none;
    width: 100%;
    max-height: 40px;
`

const Search = (props) => {

    const [term, setTerm] = useState('');

    const onSearchChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearchChange(term)
    };

    return (
        <StyledSearch
            type="text"
            placeholder="search..."
            value={term}
            onChange={onSearchChange}
        />
    )
};


export default Search
