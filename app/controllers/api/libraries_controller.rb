class Api::LibrariesController < ApplicationController
  before_action :require_login

  def index
    @library_items = current_user.library_items
    @library_games = current_user.library_items.with_attached_photos

    if @libary_items && @library_games
      render json: [@libary_items, @library_games]
    else
      render json: ["Library is empty"], status: 404
    end
  end
end
