import "./collectionItem.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

function CollectionItems({ item }) {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart{" "}
      </CustomButton>
    </div>
  );
}

export default CollectionItems;
