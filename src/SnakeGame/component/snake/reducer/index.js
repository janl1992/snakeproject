import {
    UPDATE_CIRCLE
} from '../action'

const initialState = {
    snakearray: {
                head: {
                    x: 50,
                    y: 25,
                    r: 7,
                    direction: 0 // 0 x nach rechts
                }
                }
};

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CIRCLE:
            return determineUpdate(state);
        default:
            return state
    }
}

function determineUpdate(state){
    switch (state.snakearray.head.direction){
        case 0:
            return {
                ...state,
                snakearray:{
                    head: {
                        ...state.snakearray.head,
                        x: state.snakearray.head.x + 7
                    }
                }
            }
        default:
            return state
    }
}

export function getSnake (state) {
    return {
        ...state.snake
    }
}