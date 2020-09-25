import { FETCH_DATA } from '../actions/actions';

const initialState = {
    data: [],
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;