import { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionPage/collectionPage.component";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import "./shopPage.styles.scss";

function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // getting collectionsRef from firestore
    const collectionsRef = firestore.collection("collections");

    // on each snapshot we want to add data to it and convert it to map.
    const usSubscribeFromSnapshot = collectionsRef.onSnapshot(
      async (snapshot) => {
        const mapCollections = convertCollectionsSnapshotToMap(snapshot);

        dispatch(updateCollections(mapCollections));
      }
    );

    return () => usSubscribeFromSnapshot();
  }, []);

  
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collection`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
