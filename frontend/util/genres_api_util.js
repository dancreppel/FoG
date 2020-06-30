export const getGenres = () =>
  $.ajax({
    url: "/api/genres"
});