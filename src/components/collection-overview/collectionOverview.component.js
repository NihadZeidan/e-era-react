import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collectionPreview.component";

import "./collectionOverview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionForPreview);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionData }) => {
        return <CollectionPreview key={id} {...otherCollectionData} />;
      })}
    </div>
  );
};

export default CollectionOverview;
