class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def show
    @user = User.find_by_credentials(user_params.username, user_params.password)
    if @user
      render :show
    else
      render json: ['Invalid Credentials'], status: 401
  end
end
