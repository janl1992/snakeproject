import {
    UPDATE_COUNTER,
} from '../action'
const initialState  = {
    points: 0,
    snakelength: 4
};

export default (state = initialState, action) => {


    switch(action.type){
        case UPDATE_COUNTER:
            return {
            ...state,
                snakelength: action.payload.snakelength,
                points: action.payload.points

            }
        default:
            return state
    }
}