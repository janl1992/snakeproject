export const UPDATE_CIRCLE = 'CIRCLE.UPDATE';
export const UPDATE_DIRECTION = 'DIRECTION.UPDATE';
export const COLLISION_UPDATE = 'COLLISION.UPDATE';
export const SNAKE_COLLISION = 'COLLISION.SNAKE';

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
    const hitfruit = fruitarray.filter(e => Math.abs(e.x - head.x)<=15 && Math.abs(e.y - head.y)<=15 );
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

export function checkSnakeSnakeCollision(snakearray,width,height){
    const head = snakearray.snakearray.head;
    const bodyhit = snakearray.snakearray.body.filter(e => Math.abs(e.x - head.x)<=10 && Math.abs(e.y - head.y)<=10 );
    if(bodyhit.length>0){
        return {
            type: SNAKE_COLLISION,
            payload: bodyhit[0]
        }
    }
    if(head.x < 0 || head.y < 0){
        return {
            type: SNAKE_COLLISION,
            payload: head
        }
    }
    if(head.x > width || head.y > height){
        return {
            type: SNAKE_COLLISION,
            payload: head
        }
    }
    return {
        type: SNAKE_COLLISION,
        payload: 0
    }
}

function dispatchNewCoordinateCircle (coordinatepayload) {
    return {
        type: UPDATE_CIRCLE,
        payload: coordinatepayload
    };
}