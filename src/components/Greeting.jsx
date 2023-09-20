import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGreeting } from '../redux/greetings/greetingsSlice'
const Greeting = () => {
    const disatch = useDispatch();
    const text = useSelector((state) => state.greeting.greeting);
    useEffect(() => {
        disatch(getGreeting());
    }, []);

    return (
        <h1>{text}</h1>
    )
}

export default Greeting