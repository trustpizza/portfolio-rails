Rails.application.routes.draw do
  devise_for :admins
  resources :projects
  root 'home#home'
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  # root "articles#index"
end
