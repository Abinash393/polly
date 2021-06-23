Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      
      resources :users, except: [:destroy] do
        collection do
          post :login
        end
      end
      
    end
  end

  root to: 'home#index'
  get '*path', to: 'home#index', via: :all
end
