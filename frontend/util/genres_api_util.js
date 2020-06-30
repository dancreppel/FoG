export default getGenres = () =>
  $.ajax({
    url: "/api/genres"
});