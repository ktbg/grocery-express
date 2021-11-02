Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
  
  resources :categories do 
    resources :products do
      resources :star_ratings
    end
  end
end
