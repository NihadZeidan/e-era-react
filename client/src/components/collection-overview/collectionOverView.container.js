import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/withSpinner.component";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collectionOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
