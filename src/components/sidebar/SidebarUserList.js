import React from "react";
import "./SidebarUserList.css";

function SidebarUserList({ user }) {
  return (
    <li className="friend">
      <img src={user.avatar} alt="" className="friendImage" />
      <span>{user.name}</span>
    </li>
  );
}

export default SidebarUserList;
