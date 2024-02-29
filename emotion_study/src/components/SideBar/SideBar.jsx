/** @jsxImportSource @emotion/react */
import { FaCaretRight, FaCaretLeft  } from "react-icons/fa";

import * as S from "./style";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

function SideBar() {
  const [ isShow, setIsShow ] = useState(false);

  // const menus = useMemo(() => [
  //   {
  //     id: 1,
  //     path: "/mypage",
  //     name: "마이페이지"
  //   },
  //   {
  //     id: 2,
  //     path: "/board",
  //     name: "게시판"
  //   },
  //   {
  //     id: 3,
  //     path: "/notice",
  //     name: "공지사항"
  //   }
  // ], []);
  
  return (
    <aside css={S.layout(isShow)}>
        <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
          {isShow ? <FaCaretLeft /> : <FaCaretRight />}
        </button>
        <ul css={S.menuList}>
          {MENUS.map((menu) =>
            <Link css={S.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")}`} key={menu.id} onClick={() => setIsShow(false)}>
              <li>{menu.name}</li>
            </Link>
          )}
        </ul>
    </aside>
  )
}

export default SideBar;