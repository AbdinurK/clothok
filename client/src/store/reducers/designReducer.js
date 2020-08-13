import {
    GET_STATE,
    SET_COLOR,
    SET_ELEMENT,
    SET_LOGO,
    PANEL_ENTRY_SELECTED,
    PANEL_DECORATE_SELECTED,
    PANEL_ELEMENTS_SELECTED,
    PANEL_SET_LOGO_SELECTED
} from "../actions/types";

const initialState = {
    panelEntrySelected: false,
    panelElementsSelected: false,
    panelDecorateSelected: false,
    panelSetLogo: false,
    selectedElement: '',
    selectedColor: '',
    selectedLogo: '',
    elements: {
        body: '#FFFFFF',
        bodylower: '#FFFFFF',
        pocketzips: '#FFFFFF',
        bodyupper: '#FFFFFF',
        sleeves: '#FFFFFF',
        collar: '#FFFFFF',
        pockets: '#FFFFFF',
        insidelining: '#171717',
        hoodLine: 'none',
        hood: '#FFFFFF',
        buttons: '',
        rib: '#FFFFFF',
        zips: '#FFFFFF',
        tape: '#FFFFFF',
        logo: ''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ELEMENT:
            return {
                ...state,
                selectedColor: '',
                selectedElement: action.payload
            };
        case SET_LOGO:
            return {
                ...state,
                selectedLogo: action.payload,
                elements: {...state.elements, logo: action.payload}
            }
        case SET_COLOR:
            return {
                ...state,
                selectedColor: action.payload,
                elements: {...state.elements, [state.selectedElement]: action.payload}
            };
        case GET_STATE:
            return state;
        case PANEL_ENTRY_SELECTED:
            return {
                ...state,
                panelEntrySelected: action.payload
            };
        case PANEL_ELEMENTS_SELECTED:
            return {
                ...state,
                panelElementsSelected: action.payload
            };
        case PANEL_DECORATE_SELECTED:
            return {
                ...state,
                panelDecorateSelected: action.payload
            };
        case PANEL_SET_LOGO_SELECTED:
            return {
                ...state,
                panelSetLogo: action.payload
            };
        default:
            return state
    }
}
