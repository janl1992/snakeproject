import {
    ADD_FRUIT,
} from '../action'
import {
    COLLISION_UPDATE
} from '../../snake/action'

const initialState = [
    {x: 500, y:250, r:15},
    {x: 100, y:50, r:15},
    {x: 150, y:75, r:15},
    {x: 210, y:80, r:15},
    {x: 230, y:90, r:15},
    {x: 490, y:40, r:15},
    {x: 175, y:200, r:15},
    {x: 620, y:150, r:15},
    {x: 110, y:400, r:15},

];

export default (state = initialState, action) => {


    switch(action.type){
        case ADD_FRUIT:
            return [
                ...state.slice(1,9),
                action.payload
            ]
        case COLLISION_UPDATE:
            return removeFruit(state,action.payload);
        default:
            return state
    }
}

function removeFruit(state, payload) {
    return state.filter(e => !(e.x === payload.x  && e.y === payload.y));
}

export function getFruits (state) {
    return [
        ...state.fruits
    ]
}