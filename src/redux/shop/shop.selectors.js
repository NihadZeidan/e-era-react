import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  // Make our collections object into an array
  (collections) => Object.keys(collections).map((key) => collections[key])
);

//By wrapping this function in memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize((collectionURLParam) => {
  return createSelector(
    [selectShopCollection],
    (collections) => collections[collectionURLParam]
  );
});
