Rails.application.routes.draw do
  resources :star_ratings
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
  
  resources :categories do 
    resources :products
  end
end
