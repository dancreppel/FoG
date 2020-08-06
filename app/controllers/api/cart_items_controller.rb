class Api::CartItemsController < ApplicationController
  :before_action :require_login

  def index
    @cart_games = User.find_by(id: params.user_id).includes(:cart_games)
    debugger
    if @cart_games
      # render :index
      render json: @cart_games
    else
      render json: "No games found", status: 404
    end
  end
end
