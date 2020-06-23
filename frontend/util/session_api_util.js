export const postSession = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session'
  })
);

export const deleteSession = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });