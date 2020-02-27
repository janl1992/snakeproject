export const UPDATE_CIRCLE = 'CIRCLE.UPDATE';

export function updateCircle(coordinates){
    return dispatch => {
        dispatch(dispatchNewCoordinateCircle(coordinates))
    }
}

function dispatchNewCoordinateCircle (coordinatepayload) {
    return {
        type: UPDATE_CIRCLE,
        payload: coordinatepayload
    };
}