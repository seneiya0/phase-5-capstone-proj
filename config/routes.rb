Rails.application.routes.draw do

  resources :comments
  resources :post_topics
  resources :posts
  resources :topics
  resources :users, only: [:create, :index, :show]

  patch "/posts/:id/unlike", to: "posts#unlike"
  patch "/posts/:id/like", to: "posts#increment_likes"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/users/:username", to: "users#user_info"
  get "posts/:id/comments", to: "posts#post_comments"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
