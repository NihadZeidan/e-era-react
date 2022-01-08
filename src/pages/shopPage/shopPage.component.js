import { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionPage/collectionPage.component";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { useSelector, useDispatch } from "react-redux";

import "./shopPage.styles.scss";
import WithSpinner from "../../components/with-spinner/withSpinner.component";

function ShopPage({ match }) {
  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);
  const dispatch = useDispatch();
  const isCollectionsLoaded = useSelector((state) => selectIsCollectionsLoaded(state));

  useEffect(() => {
    dispatch(fetchCollectionsAsync());
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          // We have to reverse the isCollectionsLoaded value to render the spinner when the collections is false (empty) 
          <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collection`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
    </div>
  );
}

export default ShopPage;
