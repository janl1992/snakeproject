export const ADD_FRUIT = 'FRUIT.ADD';

export function dispatchNewFruit(coordinates){
    return dispatch => {
        dispatch(createNewFruit(coordinates))
    }
}

function createNewFruit (fruitpayload) {
    return {
        type: ADD_FRUIT,
        payload: fruitpayload
    };
}