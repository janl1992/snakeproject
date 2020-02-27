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
                x: state.snakearray.head.x - 7
            }
        }else {
            return {
                ...state.snakearray.body[index-1],
                x: state.snakearray.body[index-1].x - 7
            }
        }
    })

}

export function getSnake (state) {
    return {
        ...state.snake
    }
}