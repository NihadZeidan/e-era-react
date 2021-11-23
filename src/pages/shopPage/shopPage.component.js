import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

function ShopPage() {
  const collections = useSelector(selectShopCollection);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionData }) => {
        return <CollectionPreview key={id} {...otherCollectionData} />;
      })}
    </div>
  );
}

export default ShopPage;
