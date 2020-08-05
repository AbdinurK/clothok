import React, {useState} from "react";
import styles from "./Search.module.css"

const Search = (props) => {

    const [term, setTerm] = useState('');

    const onSearchChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearchChange(term)
    };

    return (
        <input
            type="text"
            className={styles.search}
            placeholder="search..."
            value={term}
            onChange={onSearchChange}
        />
    )
};


export default Search
