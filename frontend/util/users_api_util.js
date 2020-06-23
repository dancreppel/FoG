export const getUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
  });

export const postUser = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users/",
    data: { user },
  });
