import React from "react";
import "./Online.css";

function Online({ user }) {
  return (
    <div className="onlineFriendsContainer">
      <div className="onlineFriends">
        <img src={user.profilePicture} alt="" className="onlineFriendsImage" />
        <span className="rightbarOnline"></span>
        <b className="friendName">{user.userName}</b>
      </div>
    </div>
  );
}

export default Online;
