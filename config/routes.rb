Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # DUCHESS
  # resources :users, only: :create
  resources :users, only: [:index, :show, :create] 
  resources :star_ratings
  
  resources :categories, only: [:index, :show] 
  resources :products, only: [:index, :show]
  
end
