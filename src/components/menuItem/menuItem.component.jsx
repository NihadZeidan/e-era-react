import "./menuItem.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, match, history, linkURL }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkURL}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> Shop Now</span>
      </div>
    </div>
  );
}

// HOC
export default withRouter(MenuItem);
