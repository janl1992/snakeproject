import {
    UPDATE_CIRCLE, UPDATE_DIRECTION
} from '../action'

const initialState = {
    snakearray: {
                head: {
                    x: 50,
                    y: 25,
                    r: 7,
                    direction: 0 // 0 x nach rechts
                },
                body:[
                    {x:36,y:25,r:7},
                    {x:22,y:25,r:7},
                    {x:8,y:25,r:7}
                ]
                }
};

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_CIRCLE:
            return determineUpdate(state);
        case UPDATE_DIRECTION:
            return determineNewDirection(state, action.payload);
        default:
            return state
    }
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
                        x: state.snakearray.head.x + 14
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
                        y: state.snakearray.head.y - 14
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
                        x: state.snakearray.head.x - 14
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
                        y: state.snakearray.head.y + 14
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