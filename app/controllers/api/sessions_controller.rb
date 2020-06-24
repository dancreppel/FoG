class Api::SessionsController < ApplicationController
  # before_action :require_login, only: :destroy

  def create
    @user = User.find_by_credentials(*user_params.values)
    if @user
      login!(@user)
      render :show
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ['Require login'], status: 422
    end
  end
end
