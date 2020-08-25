class Api::CartItemsController < ApplicationController
  before_action :require_login

  def index
    @current_user = current_user
    @cart_items = @current_user.cart_items
    @cart_games = @current_user.cart_games.with_attached_photos
    if @cart_games
      render :index
    else
      render json: ["No games found"], status: 404
    end
  end

  def create
    @cart_item = CartItem.new(
      user_id: current_user.id, 
      game_id: cart_params[:game_id]
    )

    if @cart_item.save
      render :create
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    if params[:id] == "all"
      @cart = current_user.cart_items
    else
      @cart = CartItem.where(id: params[:id])
    end

    if !@cart.empty?
      @cart.destroy_all
      render json: ['Deleted from cart']
    else
      render json: ['Cannot delete from cart'], status: 400
    end

  end

  def cart_params 
    params.require(:cart).permit(:game_id)
  end
end
