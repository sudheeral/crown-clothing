import { useEffect, useNavigate } from "react-router-dom";

import "./directory-item.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  // console.log("DirectoryItem", JSON.stringify(category));

  const navigate = useNavigate();
  const navidateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={navidateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
