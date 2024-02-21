import { useState, useRef, useEffect } from 'react';
import StudentInfo from '../components/StudentInfo';
import InfoInput from '../components/InfoInput';
import InfoButtons from '../components/InfoButtons';

export default function StudentPage() {
    const studentObj = {
        name : "",
        age : "",
        address : ""
      };
    
      const [ student, setStudent ] = useState(studentObj);
      const [ inputValues, setInputValues ] = useState(studentObj);
      // const [ refresh, setRefresh ] = useState(false);
    
      const inputRef = {
        name : useRef(),
        age : useRef(),
        address : useRef()
      };
      // const nameInputRef = useRef();
      // const ageInputRef = useRef();
      // const addressInputRef = useRef();
    
      useEffect(() => {
        console.log(inputRef.name.current);
      }, []);
    
      useEffect(() => {
        setInputValues(studentObj);
        // setRefresh(true);
      }, [student]);
    
      // const [ name, setName ] = useState("");
      // const [ age, setAge ] = useState("");
      // const [ address  setAddress ] = useState("");
    
      /* 
        js 객체 특징
        1. 키값은 문자열이어도 된다.
        2. 변수의 문자여려 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.(키값을 []로 묶어도 된다, 대괄호 안에는 값을 쓸 수 있다.)
        3. 변수 명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
      */
      // let email = "email";
      // let phone = "01012345678";
      
      // let user = {
      //   username: "test",
      //   ["password"]: "1234",
      //   [email] : "email.com",
      //   phone
      // };
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // switch(name) {
        //   case "name":
        //     inputValues.name = value;
        //     break;
        //   case "age":
        //     inputValues.age = value;
        //     break;
        //   case "address":
        //     inputValues.address = value;
        //     break;
        //   default:
        //     console.log();
        // }
    
        setInputValues({
          ...inputValues,
          [name] : value
        });
      }
    
      const handleOnOk = () => {
        // setName(inputValues.name);
        // setAge(inputValues.age);
        // setAddress(inputValues.address);
          setStudent(inputValues);
      };
    
      const handleOnDelete = () => {
        setStudent(studentObj);
      };
    
    
      return (
        <>
          {/* <h1>이름: {student.name}</h1>
          <h1>나이: {student.age}</h1>
          <h1>주소: {student.address}</h1> */}
          <StudentInfo title="나이" text={student.name} />
          <StudentInfo title="이름" text={student.age} />
          <StudentInfo title="주소" text={student.address} />
    
          {/* <input type="text" 
            name='name' 
            onChange={handleInputChange} 
            value={inputValues.name}
            placeholder='이름' />
    
          <input type="text" 
            name='age' 
            onChange={handleInputChange} 
            value={inputValues.age} 
            placeholder='나이' />
    
          <input type="text" 
            name='address' 
            onChange={handleInputChange} 
            value={inputValues.address} 
            placeholder='주소' /> */}
    
          <InfoInput 
            name={"name"}
            onChange={handleInputChange} 
            value={inputValues.name}
            placeholder="이름"
            inputRef={inputRef.name}
          />
          <InfoInput 
            name={"age"} 
            onChange={handleInputChange} 
            value={inputValues.age} 
            placeholder="나이"
            inputRef={inputRef.age}
          />
          <InfoInput 
            name={"address"} 
            onChange={handleInputChange} 
            value={inputValues.address} 
            placeholder="주소"
            inputRef={inputRef.address}
          />
    
          <InfoButtons>
            <button onClick={handleOnOk}>확인</button>
            <button onClick={handleOnDelete}>비우기</button>
          </InfoButtons>
        </>
      );
}
