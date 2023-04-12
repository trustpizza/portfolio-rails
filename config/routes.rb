Rails.application.routes.draw do
  resources :projects
  root 'home#home'
  get "/about", to: "home#about"
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  # root "articles#index"
end
