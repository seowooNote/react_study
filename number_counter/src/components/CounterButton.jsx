import React from 'react'

function CounterButton({ title, onClick }) {
    // console.log(title);
    return (
        <button onClick={ onClick }>{ title }</button>
    )
}

export default CounterButton