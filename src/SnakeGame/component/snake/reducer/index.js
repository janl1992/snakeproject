import {
    UPDATE_CIRCLE, UPDATE_DIRECTION, COLLISION_UPDATE, SNAKE_COLLISION
} from '../action'

const initialState = {
    snakearray: {
                head: {
                    x: 70,
                    y: 10,
                    r: 10,
                    direction: 0 // 0 x nach rechts
                },
                body:[
                    {x:50,y:10,r:10},
                    {x:30,y:10,r:10},
                    {x:10,y:10,r:10}
                ]
                }
};



export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CIRCLE:
            return determineUpdate(state);
        case UPDATE_DIRECTION:
            return determineNewDirection(state, action.payload);
        case COLLISION_UPDATE:
            return determineUpdateSnake(state, action.payload);
        case SNAKE_COLLISION:
            return determineKillSnake(state, action.payload);
        default:
            return state
    }
}

function determineKillSnake(state, update) {
    if (update !== 0) {
        return "";
    }
    return{ ...state};
}



function determineUpdateSnake(state, update) {
    if (update !== 0) {
        return {
            ...state,
            snakearray: {
                head: {
                    ...state.snakearray.head
                },
                body: state.snakearray.body.concat(state.snakearray.body[state.snakearray.body.length-1])

            }
        }
    }
    return{ ...state};
}

function determineNewDirection(state, direction){
    var newDirection = state.snakearray.head.direction + direction;
    if (newDirection === 4){
        newDirection = 0
    }
    if(newDirection === -1){
        newDirection = 3
    }
    return {
        ...state,
        snakearray:{
            head: {
                ...state.snakearray.head,
                direction: newDirection
            },
            body: state.snakearray.body

        }

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
                        x: state.snakearray.head.x + 20
                    },
                    body: calcBody(state)

                }

            }
        case 1:
            return {
                ...state,
                snakearray:{
                    head: {
                        ...state.snakearray.head,
                        y: state.snakearray.head.y - 20
                    },
                    body: calcBody(state)

                }

            }
        case 2:
            return {
                ...state,
                snakearray:{
                    head: {
                        ...state.snakearray.head,
                        x: state.snakearray.head.x - 20
                    },
                    body: calcBody(state)

                }

            }
        case 3:
            return {
                ...state,
                snakearray:{
                    head: {
                        ...state.snakearray.head,
                        y: state.snakearray.head.y + 20
                    },
                    body: calcBody(state)

                }

            }
        default:
            return state
    }
}

function calcBody(state){
    const body = state.snakearray.body;
    return body.map((value,index)=>{
        if(index===0){
            return  {
                ...state.snakearray.head,
                x: state.snakearray.head.x
            }
        }else {
            return {
                ...state.snakearray.body[index-1],
                x: state.snakearray.body[index-1].x
            }
        }
    })

}

export function getSnake (state) {
    return {
        ...state.snake
    }
}