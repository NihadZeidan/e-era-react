import { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

import "./shopPage.styles.scss";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collectionOverView.container")
);
const CollectionPreviewContainer = lazy(() =>
  import("../collectionPage/collection.container")
);

function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsAsync());
  }, []);

  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collection`}
            component={CollectionPreviewContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default ShopPage;
