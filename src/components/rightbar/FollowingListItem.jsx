import React from "react";
import "./followingListItem.css";
import "./Rightbar.css";

function FollowingListItem({ user }) {
  return (
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={user.image} alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">{user.name}</span>
      </div>
    </div>
  );
}

export default FollowingListItem;
