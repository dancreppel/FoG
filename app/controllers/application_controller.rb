class ApplicationController < ActionController::Base
  # for testing purposes DO NOT FORGET TO REMOVE
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    unless current_user
      render json: ["Must be logged in"], status: 401
    end
  end

  private 
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
