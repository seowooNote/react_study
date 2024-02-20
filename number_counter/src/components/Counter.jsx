import { useState } from 'react'
import CounterInput from './CounterInput';
import CounterButton from './CounterButton';

function Counter() {
    const [ number, setNumber ] = useState(0);
    const [ count, setCount ] = useState(0);
    
    const handleOnDecrease = () => {
        setNumber(number - count);
    };

    const handleOnIncrease = () => {
        setNumber(number + count);
    };
    
    return (
        <>
            <h1>{ number }</h1>
            <CounterInput setCount={ setCount } />
            <CounterButton title={ "-" } onClick={handleOnDecrease} />
            <CounterButton title={ "+" } onClick={handleOnIncrease} />
        </>
    )
}

export default Counter;