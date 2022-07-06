Rails.application.routes.draw do
  resources :books
  resources :authors
  resources :genres, only: [:index, :show]

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
