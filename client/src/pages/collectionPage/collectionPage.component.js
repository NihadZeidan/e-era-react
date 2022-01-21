import CollectionItems from "../../components/collection-item/collectionItem.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collectionPage.styles.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector((state) =>
    selectCollection(match.params.collection)(state)
  );

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
