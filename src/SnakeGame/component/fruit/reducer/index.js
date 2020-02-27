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
    {x: 175, y:20, r:10},
    {x: 120, y:15, r:10},
    {x: 110, y:5, r:10},
    {x: 49, y:30, r:10},
    {x: 27, y:13, r:10},
    {x: 15, y:12, r:10},
    {x: 44, y:46, r:10},
    {x: 9, y:32, r:10},
];

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_FRUIT:
            return [
                ...state.slice(1,9),
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