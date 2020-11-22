import { useEffect, useRef } from "react";

// usePrevious is custom hook to get previous value of state variable in React function component

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}