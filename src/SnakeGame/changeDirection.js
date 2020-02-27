import {useEffect} from "react";

// Adds a useEffect hook which calls the provided 'closeFn' function
// if the user presses and releases the 'Escape' key.
export const useChangeDirection = changeDirectionFunction => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                changeDirectionFunction(1);
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                changeDirectionFunction(-1);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return function cleanUp() {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [changeDirectionFunction]);
};
