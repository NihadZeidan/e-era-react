import CollectionOverview from "../../components/collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionPage/collectionPage.component";

import "./shopPage.styles.scss";

function ShopPage({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collection`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
