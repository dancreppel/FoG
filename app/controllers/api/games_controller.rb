class Api::GamesController < ApplicationController
  def show
    @game = Game.with_attached_photos.find_by(id: params[:id])

    if @game 
      render :show
    else
      render json: ['Game not found'], status: 404
    end
  end

  def index
    @games = Game.with_attached_photos.all

    if @games 
      render :index
    else
      render json: ['Games not found'], status: 404
    end
  end

  def update
    @game = Game.find_by(id: params[:id])
    @game.discount = game_params['discount'].to_f

    if @game.save
      render json: ['Game updated']
    else
      render json: ['Cannot modify game'], status: 400
    end
  end

  private
  def game_params
    params.require(:game).permit(:discount)
  end
end
