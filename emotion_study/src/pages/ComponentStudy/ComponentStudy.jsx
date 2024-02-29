function ComponentStudy({a , b}) {
    // 상태관리 useState
    // 마운트관리 useEffect | useMemo, useCallBack
    // 이벤트관리 onChange(e), handle
    return (
        // 비구조 할당으로 사용하는 법
        <>{a} + {b} = {a + b}</>
        // 기존 비구조 할당을 사용하지 않으면 컴포넌트 함수의 매개변수에 props
        // <>{props.a} + {props.b} = {props.a + props.b}</>
    )
}

export default ComponentStudy;