Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:show, :index, :update]
    resources :genres, only: :index
    resources :games_genres, only: :index
    resources :cart_items, only: [:index, :create, :destroy]
  end
end
