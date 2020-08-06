json.set! @cart_item.id do
  json.extract! @cart_item, :id, :game_id
end