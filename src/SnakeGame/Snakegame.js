import * as React from 'react';
import Fruit from "./component/Fruit";
import Snake from "./component/Snake";
import {useEffect} from "react";
import {dispatchNewFruit} from '../SnakeGame/component/fruit/action'
import {updateCircle} from '../SnakeGame/component/snake/action'
import {getFruits} from '../SnakeGame/component/fruit/reducer'
import {getSnake} from '../SnakeGame/component/snake/reducer'
import {connect} from 'react-redux';

export const Snakegame = ({width = 500, height = 250, backgroundColor = "white", dispatchNewFruit, fruitarray, snakearray, updateCircle}) => {
    useEffect(() => {
        const timedFunction = setInterval(() => {
            dispatchNewFruit({x: Math.random() * Math.floor(width), y: Math.random() * Math.floor(height), r: 10})
        }, 2000);
        const snakeFunction = setInterval(() => {
            updateCircle({x: Math.random() * Math.floor(width), y: Math.random() * Math.floor(height), r: 10})
        }, 2000);
        return function cleanup() {
            clearInterval(timedFunction);
            clearInterval(snakeFunction);
        };
    });
    return (
        <svg style={{width, height, backgroundColor}}>
            {fruitarray.map((e, index) => <Fruit key={index} x={e.x} y={e.y} r={e.r}/>)}
            {<Snake x = {snakearray.snakearray.head.x}
                    y = {snakearray.snakearray.head.y}
                    r = {snakearray.snakearray.head.r}/>}
        </svg>
    );
};

const mapDispatchToProps = {dispatchNewFruit, updateCircle};
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