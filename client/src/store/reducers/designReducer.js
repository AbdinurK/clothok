import { GET_STATE, SET_COLOR, SET_ELEMENT } from "../actions/types";

const initialState = {
    selectedElement: '',
    selectedColor: '',
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
        case SET_COLOR:
            return {
                ...state,
                selectedColor: action.payload,
                elements: {...state.elements, [state.selectedElement]: action.payload}
            };
        case GET_STATE:
            return state;
        default:
            return state
    }
}
