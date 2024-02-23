import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right: 0;
    top: ${isShow ? "0px" : "-80px"};
    z-index: 99;
    border-right: 1px solid #dbdbdb;
    
    width: 50%;
    height: 80px;

    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 2px #00000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    top: 80px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    
    width: 50px;
    height: 15px;

    background-color: white;
    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover {
        background-color: #eeeeee;
    }

    &:active {
        background-color: #aaaaaa;
    }
`;

export const menuList = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;

    width: 200px;
    height: 50px;

    color: black;
    font-weight: 600;
    text-decoration: none;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;

    &:nth-of-type(2) {
        margin: 0px 20px;
    }

    &:hover {
        background-color: #eee;
    }

    &:active {
        background-color: #dbdbdb;
    }
`;