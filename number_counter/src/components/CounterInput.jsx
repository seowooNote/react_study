import { useState } from 'react'

function CounterInput({ setCount }) {
    const [ inputValue, setInputValue ] = useState("0");
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setCount(parseInt(inputValue));
    }

    return (
        <input type="text" onChange={ handleInputChange } value={inputValue}/>
    )
}

export default CounterInput;