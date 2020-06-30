class Api::GamesGenresController < ApplicationController
  def index
    @games_genres = GamesGenre.all
    render :index
  end
end
