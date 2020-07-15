import { SET_ELEMENT, SET_COLOR, GET_STATE } from "./types";

export const setElement = (element) => {
    return {
        type: SET_ELEMENT,
        payload: element
    }
};
export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: color
    }
};

export const getState = () => dispatch => {
    dispatch({
        type: GET_STATE
    })
};
