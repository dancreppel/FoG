class Api::LibrariesController < ApplicationController
  before_action :require_login

  def index
    @library_items = current_user.library_items
    @library_games = current_user.library_games.with_attached_photos

    debugger;
    if @library_items && @library_games
      render json: [@library_items, @library_games]
    else
      render json: ["Library is empty"], status: 404
    end
  end

  def create 
    @library_item = Library.new(
      user_id: current_user.id,
      game_id: library_params[:game_id],
      owned: library_params[:owned]
    )

    if @library_item.save
      render json: @library_item
    else
      render json: @library_item.errors.full_messages, status: 422
    end
  end

  private
  def library_params 
    params.require(:library).permit(:game_id, :owned)
  end
end
