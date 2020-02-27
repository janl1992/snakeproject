import * as React from 'react';
import Fruit from "./Fruit";
export function Snake ({x,y,r}){
    return (
        <circle
            cx = {x}
            cy = {y}
            r = {r}
            style={{
                fill: 'black'
            }}
        />
    );
};

export default Snake;