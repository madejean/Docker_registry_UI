export const selectRepo = (repo) => {
  console.log("You clicked on repository: ", repo);
  return {
    type: "REPO_SELECTED",
    payload: repo
  }
}
