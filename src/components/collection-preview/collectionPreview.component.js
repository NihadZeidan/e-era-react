import CollectionItems from "../collection-item/collectionItem.component";
import "./collectionPreview.styles.scss";
import { Link } from "react-router-dom";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`shop/` + title.toLowerCase()}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItems key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
