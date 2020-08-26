export const getLibrary = () => (
  $.ajax({
    url: "api/libraries"
  })
);

export const postLibraryItem = (gameId, owned) => (
  $.ajax({
    url: "api/libraries",
    method: "post",
    data: { library: { game_id: gameId, owned } }
  })
);

export const deleteLibraryItem = libraryItemId => (
  $.ajax({
    url: `api/libraries/${libraryItemId}`,
    method: "delete"
  })
);