export const selectTag = (tag) => {
  console.log("You clicked on tag: ", tag);
  return {
    type: "TAG_SELECTED",
    payload: tag
  }
}
