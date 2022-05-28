import React from "react";
import DummyOnlineUser from "../../DummyOnlineUser.js";
import Online from "../online/Online";
import FollowingListItem from "./FollowingListItem.jsx";
import "./Rightbar.css";
import UserFollowingList from "./UserFollowingList";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbar">
          <div className="rightbarHeader">
            <div className="rightbarHeaderImage">
              <img
                src="/Images/birthday.svg"
                alt=""
                className="rightbarHeaderImageSvg"
              />
              <span className="birthdayText">
                <b> Pola Foster </b> and
                <b> 3 others </b> friends have a birthday today.
              </span>
            </div>
          </div>
          <div className="birthdayImagePartyLi">
            <img
              src="/Images/birthday.jpg"
              alt="birthday party"
              className="birthdayImageParty"
            />
          </div>
        </div>
        <ul className="rightbarFriendsList">
          <h3 className="onlineFriendsText">Online Friends</h3>
          {DummyOnlineUser.map((user, index) => {
            return <Online key={index} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h2>User Information</h2>
        <div className="profileUserInformationContainer">
          <div className="profileInfoOfUser">
            <span className="profileUserInformationKey">City : </span>
            <span className="profileUserInformationValue"> Goalpara </span>
          </div>
          <div className="profileInfoOfUser">
            <span className="profileUserInformationKey">From : </span>
            <span className="profileUserInformationValue"> India </span>
          </div>
          <div className="profileInfoOfUser">
            <span className="profileUserInformationKey">Relationship : </span>
            <span className="profileUserInformationValue"> Single </span>
          </div>
        </div>
        <br />
        <br />
        <h2 className="userFriendsText">User Friends</h2>
        <div className="rightbarFollowings">
          {UserFollowingList.map((user, index) => {
            return <FollowingListItem key={index} user={user} />;
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      {/* <ProfileRightbar /> */}
    </div>
  );
}

export default Rightbar;
