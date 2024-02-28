import { useMemo } from "react";

export function useLoadList() {
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    }, []);

    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 : boardList[boardList.length - 1].boardId;
    const size = boardList.length;

    return { boardList, size, firstId, lastId };
}


/*
    탑
    정글
    미드
    원딜
    서폿
*/