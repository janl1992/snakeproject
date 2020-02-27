export const UPDATE_CIRCLE = 'CIRCLE.UPDATE';
export const UPDATE_DIRECTION = 'DIRECTION.UPDATE';

export function updateCircle(coordinates){
    return dispatch => {
        dispatch(dispatchNewCoordinateCircle(coordinates))
    }
}

export function updateDirection(direction){
    return dispatch => {
        dispatch(dispatchNewDirection(direction))
    }
}

function dispatchNewDirection(direction){
    return {
        type: UPDATE_DIRECTION,
        payload: direction
    };
}

function dispatchNewCoordinateCircle (coordinatepayload) {
    return {
        type: UPDATE_CIRCLE,
        payload: coordinatepayload
    };
}