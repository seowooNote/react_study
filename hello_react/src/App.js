/* 
    React Component 특징
    1. 파일명과 함수명을 일치시킨다.
    2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
    3. 함수를 꼭 export 해야한다
*/
import { useState } from "react";

export default function App() {
  let names = ["홍길동1", "홍길동2", "홍길동3"];
  // let names = [<h1>홍길동1</h1>, <h1>홍길동2</h1>, <h1>홍길동3</h1>];
  // let jsxNames = names.map((name) => <h1>{ name }</h1>);

  // useState 는 return type 이 배열
  const [ nameArrayState, setNameArrayState ] = useState(["홍길동1", "홍길동2", "홍길동3"]);
  // 상태관리
  // 상태가 변하면 렌더링이 다시 된다.
  // 일반 변수로는 상태가 변하지 않는다. -> useState를 이용해야 상태가 변한다.

  // const { name, age } = { name : "홍길동4", age : 40 };
  // const [ num1, num2, num3, num4 ] = [ 1, 2, 3, 4 ];

  console.log("콘솔 호출?");

  const handleClick = () => {
    setNameArrayState([...names, "홍길동4"]);
    console.log(names);
  };

  // const handleClick = () => {
  //   names = [...names, "홍길동4"];
  //   console.log(names);
  // };

  // setTimeout(() => {
  //   setNameArrayState([...names, "홍길동4"]);
  //   setTimeout(() => {
  //     setNameArrayState([...names, "홍길동5"]);
  //     setTimeout(() => {
  //       setNameArrayState([...names, "홍길동6"]);
  //     }, 2000);
  //   }, 2000);
  // }, 2000);

  // jsx
  return (
    <>
      {/* {names.map(name => <h1>{name}</h1>)} */}
      {/* {nameArrayState[0]} */}
      {/* {nameArrayState[1]} */}
      {/* {nameArrayState[2]} */}
      {/* <br /> */}
      {/* {num1} */}
      {/* {num2} */}
      {/* {num3} */}
      {/* {num4} */}
      {/* <br /> */}
      <button onClick={ handleClick }>클릭</button>
      <div>
        { nameArrayState.map(name => <h1>{ name }</h1>) }
        {/* { names.map(name => <h1>{ name }</h1>) } */}
      </div>
    </>
  )
}

// export default function App1() {
//   return (
//     <>
//       <div>App1</div>
//       <div></div>
//     </>
//   );
// }

// export function App2() {
//   return (
//     <>
//       <div>App2</div>
//       <div></div>
//     </>
//   )
// }
