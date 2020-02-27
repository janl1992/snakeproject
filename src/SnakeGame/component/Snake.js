import * as React from 'react';
export function Snake ({x, y, r, body}){
    return (
        <React.Fragment>
        <circle
            cx = {x}
            cy = {y}
            r = {r}
            style={{
                fill: 'black'
            }}
        />
    {body.map((element) => (
        <circle
            cx = {element.x}
            cy = {element.y}
            r = {element.r}
            style={{
                fill: 'black'
            }}
        />

    ))}
        </React.Fragment>)
};

export default Snake;