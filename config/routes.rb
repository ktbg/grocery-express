Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: :create
  
  resources :categories, only: [:index, :show] do 
    resources :products, only: [:index, :show] do
      resources :star_ratings
    end
  end
end
