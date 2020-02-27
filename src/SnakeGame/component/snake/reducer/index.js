import {
    UPDATE_CIRCLE
} from '../action'

const initialState = {
    snakearray: {x: 50, y:25, r:7}
};

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CIRCLE:
            return {
                ...state,
                snakearray: action.payload
            }
        default:
            return state
    }
}

export function getSnake (state) {
    return [
        ...state.fruits
    ]
}