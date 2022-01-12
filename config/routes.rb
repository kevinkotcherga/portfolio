# inside config/routes.rb
Rails.application.routes.draw do
  get "pages/home"
  get "pages/profile"
  get "pages/competences"
  get "pages/portfolio"
  get "pages/contact"
  root to: "pages#home"
end
