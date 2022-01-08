import ShopActionType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionType.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFalure = (errorMessage) => {
  return {
    type: ShopActionType.FETCH_COLLECTIONS_FALURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    // getting collectionsRef from firestore
    const collectionsRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    // This is a promise pattern
    // once the component did mount we want to get the data and modify it.
    collectionsRef
      .get()
      .then((snapshot) => {
        const mapCollections = convertCollectionsSnapshotToMap(snapshot);

        dispatch(fetchCollectionsSuccess(mapCollections));
      })
      .catch((error) => dispatch(fetchCollectionsFalure(error.message)));
  };
};
