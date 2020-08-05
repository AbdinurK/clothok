import React from "react";

export const withDesignProps = Component => (props) => {
    return <Component {...props}/>
};
