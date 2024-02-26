/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { stringify, v4 as uuid } from "uuid";

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx() {
    const [ url, setUrl ] = useState(null); 
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setProgressPercent ] = useState(0);
    const imgFileRef = useRef();

    useEffect(() => {
        setUrl(!localStorage.getItem("url") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, [])

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);

        // console.log(e.target.files);

        // let ps = [
        //     new Promise(resolve => resolve(1)), 
        //     new Promise(resolve => resolve(2)), 
        //     new Promise(resolve => resolve(3))
        // ];

        // Promise.all(ps).then(result => console.log(result));

        let promises = [];
        promises = files.map((file) => new Promise((resolve) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }));

        // for(let file of e.target.files) {
        //     promises = [...promises, new Promise((resolve) => {
        //         const fileReader = new FileReader();

        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);
        //         }

        //         fileReader.readAsDataURL(file);
        //     })];
        // }

        Promise.all(promises)
        .then(result => {
            // console.log(result);
            setPreviews(result);
        });
    }

    const handleImageUpload = () => {
        const files = previews;
    
        let promises = [];
    
        promises = files.map((file) => new Promise((resolve) => {
            const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
                },
                (error) => {
                    alert("업로드 실패");
                },
                () => {
                    alert("업로드 완료");
                    getDownloadURL(storageRef).then(url => {
                        // 기존의 url 상태를 업데이트하는 것이 아니라, 새로운 URL을 추가하도록 수정합니다.
                        setUrl(prevUrls => [...prevUrls, url]); // 기존의 URL 배열에 새로운 URL을 추가합니다.
                        localStorage.setItem("urls", url); // URL을 문자열 형태로 localStorage에 저장합니다.
                    });
                }
            ); 
        }));
    
        Promise.all(promises)
        .then(() => {
            // 모든 이미지가 업로드되고 URL이 설정된 후 previews를 비웁니다.
            setPreviews([]);
        });
    }
    

    return (
        <div css={layout}>
            {Array.isArray(url) && url.length > 0 ? url.map((url, index) => {
                return(
                    <div key={index} css={imageLayout}>
                        <img src={url} alt="" />
                    </div>
                )
            }) : null}
            {previews.map((preview, index) => {
                return(
                    <>
                        <div key={index} css={imageLayout}>
                            <img src={preview} alt="" />
                        </div>
                        <Line percent={progressPercent} strokeWidth={4} strokeColor={"#dbdbdb"} />
                    </>
                )
            })}
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    )
}

export default ImageEx;