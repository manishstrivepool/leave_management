Rails.application.routes.draw do
  devise_for :users
  root to: 'holidays#index'
  
  resources :holidays

  post 'holidays/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
