import {
    ADD_FRUIT,
} from '../action'
import {
    COLLISION_UPDATE
} from '../../snake/action'

const initialState = [
    {x: 500, y:250, r:10},
    {x: 100, y:50, r:10},
    {x: 150, y:75, r:10},
    {x: 210, y:80, r:10},
    {x: 230, y:90, r:10},
    {x: 190, y:40, r:10},
    {x: 175, y:20, r:10},
    {x: 120, y:15, r:10},
    {x: 110, y:5, r:10},

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