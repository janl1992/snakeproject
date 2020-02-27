import {
    ADD_FRUIT
} from '../action'

const initialState = [
    {x: 500, y:250, r:10},
    {x: 100, y:50, r:10},
    {x: 150, y:75, r:10},
    {x: 210, y:80, r:10},
    {x: 230, y:90, r:10},
    {x: 190, y:40, r:10},
    {x: 230, y:30, r:10},
];

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_FRUIT:
            return [
                ...state.slice(1,7),
                action.payload
            ]
        default:
            return state
    }
}

export function getFruits (state) {
    return [
        ...state.fruits
    ]
}