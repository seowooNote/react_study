import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px;
`;  


export const profileHeader = css`
    position: relative;

    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;

    // challenger background-image
    /* background-image: url(https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjhfODAg/MDAxNTgwMTM3MjQ5OTY0.v9B5sXkqp1pEaCZxseS0c-8AVsqoT7zUaJ3bhSDs9Tsg.4WP0Lgb2bwZ5MnI8q2Rs5a7gxDLUZ5Wn6UdY-lCQu7kg.PNG.kgo3591/7.PNG?type=w800); */
    /* background-position: 189px 50px; */
    /* background-size: 320px 320px; */
    background-image: url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_3.jpg);
    background-repeat: no-repeat;
    background-size: 700px;
`;

export const video = css`
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 500px;
    opacity: 1;
    z-index: -1;
`;

export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;

    color: white;
`;

export const profileImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 200px;
    cursor: pointer;
    & > img{
        height: 100%;
    }
`;

export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const nickname = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 2px solid #dbdbdb;
    padding: 5px 0px 10px;
    text-align: center;
    width: 200PX;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
        border-bottom: 2px solid #bbb;
        background-color: #fafafa;
    }
`;

export const profileInputLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 700px;
`;

export const inputBox = css`
    position: relative;
    margin-bottom: 10px;
`;

export const profileInput = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px 20px 10px;
    font-size: 16px;

    width: 335px;
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }

    &:focus {
        outline: 2px solid #5dd6ff;
    }

    &+label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        color: #333;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
    }

    &:focus+label, &:not(:placeholder-shown)+label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const profileButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 700px;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;
