import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import fruits from '../SnakeGame/component/fruit/reducer/'
import counter from '../SnakeGame/component/counter/reducer'
import snake from '../SnakeGame/component/snake/reducer'

export function createRootReducer(history){
    return combineReducers(
        {
            router: connectRouter(history),
            fruits,
            snake,
            counter
        }
    );
}