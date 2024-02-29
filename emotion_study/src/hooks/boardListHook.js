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

export function useLoadListByPageNumber(page) {
    const pageNumber = parseInt(page);

    const loadBoardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        const loadBoardList = !lsBoardList ? [] : JSON.parse(lsBoardList);
        return loadBoardList;
    }, [page]);

    const boardList = loadBoardList.filter((board, index) => (index > (pageNumber * 10) - 11 && index < pageNumber * 10));

    const size = loadBoardList.length;

    const totalPageCount = Math.floor(size % 10 === 0 ? size / 10 : (size / 10) + 1);
    const startPageNumber = pageNumber % 5 === 0 ? pageNumber - 4 : (pageNumber - (pageNumber % 5)) + 1;
    const endPageNumber = startPageNumber + 4 <= totalPageCount ? startPageNumber + 4 : totalPageCount;
    // const endPageNumber = pageNumber % 5 === 0 ? pageNumber : (pageNumber - (pageNumber % 5)) + 5;

    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];
        for(let i = startPageNumber; i <= endPageNumber; i++) {
            newPageNumbers = [...newPageNumbers, i];
        }
        return newPageNumbers;
    }, [startPageNumber]);

    return { boardList, size, pageNumbers, totalPageCount, startPageNumber };
}