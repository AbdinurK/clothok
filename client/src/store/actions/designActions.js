import {
    SET_ELEMENT,
    SET_COLOR,
    GET_STATE,
    SET_LOGO,
    PANEL_ENTRY_SELECTED,
    PANEL_ELEMENTS_SELECTED,
    PANEL_DECORATE_SELECTED,
    PANEL_SET_LOGO_SELECTED,
    RESET
} from "./types";

export const setElement = (element) => {
    return {
        type: SET_ELEMENT,
        payload: element
    }
};

export const setLogo = (logo) => {
    return {
        type: SET_LOGO,
        payload: logo
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

export const panelEntrySelected = (selected) => {
    return {
        type: PANEL_ENTRY_SELECTED,
        payload: selected
    }
};

export const panelElementsSelected = (selected) => {
    return {
        type: PANEL_ELEMENTS_SELECTED,
        payload: selected
    }
};
export const panelDecorateSelected = (selected) => {
    return {
        type: PANEL_DECORATE_SELECTED,
        payload: selected
    }
};

export const panelSetLogoSelected = (selected) => {
    return {
        type: PANEL_SET_LOGO_SELECTED,
        payload: selected
    }
};

export const reset = () => {
    return {
        type: RESET,
        payload: null
    }
};
