import { useState } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionData }) => {
        return <CollectionPreview key={id} {...otherCollectionData} />;
      })}
    </div>
  );
}

export default ShopPage;
