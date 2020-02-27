import * as React from 'react';
import {useEffect} from 'react';
import Fruit from "./component/Fruit";
import Snake from "./component/Snake";
import {dispatchNewFruit} from '../SnakeGame/component/fruit/action'
import {updateCircle, updateDirection,checkFruitSnakeCollision} from '../SnakeGame/component/snake/action'
import {getFruits} from '../SnakeGame/component/fruit/reducer'
import {getSnake} from '../SnakeGame/component/snake/reducer'
import {connect} from 'react-redux';
import {useChangeDirection} from './changeDirection';
import {useRef} from "react";

export const Snakegame = ({width = 500, height = 250, backgroundColor = "white", dispatchNewFruit, fruitarray, snakearray, updateCircle, updateDirection, checkFruitSnakeCollision}) => {

    useInterval(() => {
        // Your custom logic here
        dispatchNewFruit({x: Math.random() * Math.floor(width), y: Math.random() * Math.floor(height), r: 10})
    },1200);

    useInterval(() => {
        updateCircle({x: Math.random() * Math.floor(width), y: Math.random() * Math.floor(height), r: 10});
        checkFruitSnakeCollision(fruitarray,snakearray);
    }, 250);

    useChangeDirection(updateDirection);
    return (
        <svg style={{width, height, backgroundColor}}>
            {fruitarray.map((e, index) => <Fruit key={index} x={e.x} y={e.y} r={e.r}/>)}
            {<Snake x={snakearray.snakearray.head.x}
                    y={snakearray.snakearray.head.y}
                    r={snakearray.snakearray.head.r} body={snakearray.snakearray.body}/>}
        </svg>
    );
};

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const mapDispatchToProps = {dispatchNewFruit, updateCircle, updateDirection,checkFruitSnakeCollision};
const mapStateToProps = state => {
    return {
        fruitarray: getFruits(state),
        snakearray: getSnake(state)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snakegame);