Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # DUCHESS
  # resources :users, only: :create
  resources :users do 
    resources :star_ratings
  end
  
  resources :categories, only: [:index, :show] do
    resources :products, only: :show
  end
end
