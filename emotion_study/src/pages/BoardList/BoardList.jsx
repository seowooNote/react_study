/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useLoadList } from "../../hooks/boardListHook";

const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const headerTitle = css`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

const boardListLayout = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 900px;
  height: 500px;
`;

const boardListHeader = css`
  box-sizing: border-box;
  display: flex;
  border-bottom: 2px solid #dbdbdb;
  width: 100%;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 40px;
    font-weight: 700;
    cursor: default;
  }
  & > div:nth-of-type(1) {
    flex-grow: 0;
    border-right: 1px solid #dbdbdb;
    width: 80px;
  }
`;

const boardListItem = css`
  color: #222;
  text-decoration: none;
  cursor: pointer;
  & > li {
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #eee;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      height: 40px;
    }
    & > div:nth-of-type(1) {
      flex-grow: 0;
      border-right: 1px solid #dbdbdb;
      width: 80px;
    }
  }
`;

function BoardList() {
  const { boardList } = useLoadList();

  return (
    <div css={layout}>
        <h1 css={headerTitle}>게시글 목록</h1>
        <ul css={boardListLayout}>
          <li css={boardListHeader}>
              <div>번호</div>
              <div>제목</div>
          </li>
          {boardList.map((board) => {
            return(
              <Link to={`/board/${board.boardId}`} key={board.boardId} css={boardListItem}>
                <li>
                    <div>{board.boardId}</div>
                    <div>{board.boardTitle}</div>
                </li>
              </Link>
            )
          })}
        </ul>
    </div>
  )
}

export default BoardList;