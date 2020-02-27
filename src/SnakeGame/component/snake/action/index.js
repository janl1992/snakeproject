export const UPDATE_CIRCLE = 'CIRCLE.UPDATE';
export const UPDATE_DIRECTION = 'DIRECTION.UPDATE';
export const COLLISION_UPDATE = 'COLLISION.UPDATE';

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

export function checkFruitSnakeCollision(fruitarray,snakearray){
    const head = snakearray.snakearray.head;
    const hitfruit = fruitarray.filter(e => Math.abs(e.x - head.x)<=7 && Math.abs(e.y - head.y)<=7 );
    if(hitfruit.length>0){
        return {
            type: COLLISION_UPDATE,
            payload: hitfruit[0]
        }
    }
    return {
        type: COLLISION_UPDATE,
        payload: 0
    }
}

function dispatchNewCoordinateCircle (coordinatepayload) {
    return {
        type: UPDATE_CIRCLE,
        payload: coordinatepayload
    };
}