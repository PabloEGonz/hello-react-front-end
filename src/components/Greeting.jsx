import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGreeting } from '../redux/greetings/greetingsSlice'
const Greeting = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.greeting.greeting);
    useEffect(() => {
        dispatch(getGreeting());
    }, [dispatch]);

    return (
        <h1>{text}</h1>
    )
}

export default Greeting