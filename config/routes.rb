Rails.application.routes.draw do
  resources :stores
  resources :books 
  get '/:featured/books', to: 'books#index'
  # do 
  #   get :featured, on: :collection
  # end

  resources :authors
  resources :genres, only: [:index, :show]

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
