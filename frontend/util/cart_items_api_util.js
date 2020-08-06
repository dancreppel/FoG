export const getCartItems = () => (
  $.ajax({
    url: "api/cart_items"
  })
)