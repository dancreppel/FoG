class Api::LibrariesController < ApplicationController
  before_action :require_login

  def index
    @library_items = current_user.library_items
    @library_games = current_user.library_games.with_attached_photos

    unless @library_items.empty?
      render :index
    end
    # else
    #   render json: ["Library is empty"], status: 404
    # end
  end

  def create 
    @library_item = Library.find_by(
      game_id: library_params[:game_id], 
      user_id: current_user.id
    )

    # if the library item already exists, update item
    if @library_item
      @library_item.owned = library_params[:owned]
    else
      @library_item = Library.new(
        user_id: current_user.id,
        game_id: library_params[:game_id],
        owned: library_params[:owned]
      )
    end

    if @library_item.save
      render :create
    else
      render json: @library_item.errors.full_messages, status: 422
    end
  end

  def destroy
    if params[:id] == "all"
      @library = current_user.library_items
    else
      @library = Library.where(id: params[:id])
    end

    unless @library.empty?
      @library.destroy_all
      render json: ['Deleted from library']
    else
      render json: ['Cannot delete from library'], status: 400
    end
  end

  private
  def library_params 
    params.require(:library).permit(:game_id, :owned)
  end
end
