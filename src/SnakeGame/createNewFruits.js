import {useEffect} from "react";

// Adds a useEffect hook which calls the provided 'closeFn' function
// if the user presses and releases the 'Escape' key.
export const useCreateNewFruits = (dispatchNewFruit,{ width = 500, height = 250}) => {
    useEffect(() => {
        const timedFunction = setInterval(() => {
            dispatchNewFruit({x: Math.random() * Math.floor(width), y: Math.random() * Math.floor(height), r: 10})
        }, 600);
        return function cleanup() {
            clearInterval(timedFunction);
        };
})}
