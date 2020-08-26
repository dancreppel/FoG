json.set! @library_item.id do
  json.extract! @library_item, :id, :game_id, :owned
end