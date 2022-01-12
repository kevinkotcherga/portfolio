# inside config/routes.rb
Rails.application.routes.draw do
  get "pages/home"
  get "pages/profile"
  get "pages/competences"
  get "pages/portfolio"
  get "pages/contact"

  get "projects/front_end"
  get "projects/full_stack"

  root to: "pages#home"
end
