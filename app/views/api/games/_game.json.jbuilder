json.extract! game, :id, :title, :price, :description, :release_date, 
:developer, :publisher, :discount

json.photoUrls game.photos.map { |file| url_for(file) }