import React, { useState } from "react";
import "./BottomPost.css";

function BottomPost({ item }) {
  const [like, setLike] = useState(item.like);
  const [isLiked, setIsLiked] = useState(false);

  const increaseLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="feedSharedContainer">
      <ul className="feedSharedUsers">
        <li className="feedSharedUser">
          <img src={item.image} alt="" className="feedSharedUserImage" />
          <span>{item.name}</span>
          <p className="postDate">{item.postedDate}</p>
        </li>
        <li className="ellipsisIconContainer">
          <img src={item.ellipsisImage} alt="" className="ellipsisIcon" />
        </li>
        <li className="postTagText">
          <p>{item.postTagText} </p>
        </li>
      </ul>

      <div className="feedSharedImageDiv">
        <img src={item.postedImage} alt="" className="feedSharedImage" />
        <ul className="feedSharedLikeLoveShareUl">
          <li
            className="feedSharedLikeLoveShareLi"
            id="feedSharedLikeLoveShareLi"
          >
            <span className="thumbIcon" onClick={increaseLike}>
              {item.likeIcon}
            </span>
          </li>
          <li className="feedSharedLikeLoveShareLi">
            <span className="chatIcon">{item.loveIcon}</span>
            <span>{like} people liked it </span>
          </li>
          <li className="commentsLi">
            <span>{item.comment} </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomPost;
