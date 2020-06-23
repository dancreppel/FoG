class ApplicationController < ActionController::Base
  def current_user
    @current_user ||= User.find_by(session_token: session[:session])
  end

  def require_login
    unless logged_in?
      render json: ['Require login'], status: 422
    end
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

  private 
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
