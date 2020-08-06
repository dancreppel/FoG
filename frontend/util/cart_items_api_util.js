export const getCartItems = () => (
  $.ajax({
    url: "api/cart_items"
  })
);

export const postCartItem = gameId => (
  $.ajax({
    url: "api/cart_items",
    method: "post",
    data: { cart: { game_id: gameId }}
  })
);