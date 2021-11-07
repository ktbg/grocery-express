Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
 
  resources :users, only: [:index, :show, :create] 
    resources :star_ratings
  
  resources :categories, only: [:index, :show] 
  resources :products, only: [:index, :show] do 
    resources :star_ratings, shallow: true            # entered specifically for the StarRatings componenet
  end
  
end
