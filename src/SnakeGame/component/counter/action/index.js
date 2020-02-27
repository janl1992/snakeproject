export const UPDATE_COUNTER = 'UPDATE.COUNTER';

export function dispatchUpdateCounter(snakelength,points){
    return dispatch => {
        dispatch(updateCounter(snakelength,points))
    }
}

function updateCounter (snakelength,points) {
    return {
        type: UPDATE_COUNTER,
        payload: {
            snakelength: snakelength,
            points: points
        }
    };
}