import CollectionItems from "../collectionItem/collectionItem.component";

import "./collectionPreview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItems key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
