import { GET_STATE, SET_COLOR, SET_ELEMENT } from "../actions/types";

const initialState = {
    selectedElement: '',
    selectedColor: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ELEMENT:
            return {
                selectedColor: '',
                selectedElement: action.payload
            };
        case SET_COLOR:
            return {
                ...state,
                selectedColor: action.payload
            };
        case GET_STATE:
            return state;
        default:
            return state
    }
}
