import React, { useCallback } from 'react';

function MemoziationTest2({ num1 , num2 }) {
    const fx1 = useCallback(() => {
        console.log("fx1 함수 실행");
        return num1 + 10000;
    }, [num1]);

    const fx2 = useCallback(() => {
        console.log("fx2 함수 실행");
        return num2 + 20000;
    }, [num2]);

    return (
        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    )
}

export default MemoziationTest2;