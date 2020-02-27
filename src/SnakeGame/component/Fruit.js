import * as React from 'react';

import cherries from '../cherries.svg';

export function Fruit ({ x, y, r, showfruit=true }){
    return(
        showfruit && <image
            x={x - r}
            y={y - r}
            height={r * 2}
            width={r * 2}
            xlinkHref={cherries}
        />
    )
};

export default Fruit;
