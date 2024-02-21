import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2() {
    // useState
    // student 객체 정보 들을 담을 리스트
    const [ studentList, setStudentList ] = useState([]);
    const [ scoreData, setScoreData ] = useState({
        total: 0,
        avg: 0
    });
    // input 에 입력값을 객체로 담음
    const [inputValue, setInputValue] = useState({
        id: 0,
        name: "",
        score: ""
    });
    // inputValue의 객체에 id 값을 추가할 것
    const staticId = useRef(0);

    const [ updateId, setUpdateId ] = useState(0);

    // onChange
    // 실제 인풋에 입력할때 발생할 이벤트를 inputValue에 저장
    const inputOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    // handler
    // 추가 버튼
    const handleAddClick = () => {
        const student = {
            ...inputValue,
            id : staticId.current += 1
        }

        setStudentList([...studentList, student]);
    }

    // 수정 버튼 클릭시 
    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    const handleUpdateSubmit = (id) => {
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === id)[0]);
        const newStudentList = [...studentList];
        newStudentList[findIndex] = inputValue;
        setStudentList(newStudentList);
        handleCancelClick();
    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: 0,
            name: "",
            score: ""
        });
    }

    // 삭제 버튼 클릭시
    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)]);
    }

    // useEffect
    useEffect(() => {
        let newTotal = 0;
        for(let i = 0; i < studentList.length; i++) {
            newTotal += parseInt(studentList[i].score);
        }
        
        setScoreData({
            total : newTotal,
            avg : (newTotal/studentList.length).toFixed(2)
        })
        console.log(scoreData.avg);
        setInputValue({
            id: 0,
            name: "",
            score: ""
        });
    }, [studentList]);
    
    return (
        <>
            <div>
                <input type="text" name='id' disabled={true} value={inputValue.id} placeholder='id' />
                <input type="text" name='name' onChange={inputOnChange} value={inputValue.name} placeholder='이름' />
                <input type="text" name='score' onChange={inputOnChange} value={inputValue.score} placeholder='점수' />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student) => {
                            return(
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.score}</td>
                                    <td>
                                        {updateId !== student.id ? (
                                            <>
                                                <button onClick={() => {handleUpdateClick(student.id)}}>수정</button>
                                                <button onClick={() => {handleDeleteClick(student.id)}}>삭제</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => {handleUpdateSubmit(student.id)}}>확인</button>
                                                <button onClick={handleDeleteClick}>취소</button>
                                            </>
                                        )}  
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{isNaN(scoreData.avg) ? 0 : scoreData.avg}</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default StudentArrayPage2;
