import { useEffect } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";

import "./shopPage.styles.scss";

import CollectionsOverviewContainer from "../../components/collection-overview/collectionOverView.container";
import CollectionPreviewContainer from "../collectionPage/collection.container";

function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsAsync());
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collection`}
        component={CollectionPreviewContainer}
      />
    </div>
  );
}

export default ShopPage;
