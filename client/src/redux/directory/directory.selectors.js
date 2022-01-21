import { createSelector } from "reselect";

const selectDirectroy = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectroy],
  (directory) => directory.sections
);
