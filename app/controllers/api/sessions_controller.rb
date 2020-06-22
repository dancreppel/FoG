class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params.username, user_params.password)
    if @user
      render :show
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end
end
