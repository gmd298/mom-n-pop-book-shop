Rails.application.routes.draw do
  resources :customers
  resources :stores
  resources :books 
  get '/:featured/books', to: 'books#index'

  resources :authors
  resources :genres, only: [:index, :show]
  get '/customers', to: 'customers#create'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
