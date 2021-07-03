class Api::V1::UsersController < ApplicationController
  extend Devise::Models

    def create
      user = User.new!(user_params)
      if user.save
        render :ok, json: { success: true, notice: "Successfully registered" }
      else
        render :bad_request, json: { success: false, notice: "Invalid input" }
      end
    end

    def login
      user = User.find_by!(email: user_params[:email])
      render status: :unauthorized, json: { success: false, notice: "User not found" } unless user.present?
      if  user.authenticate(user_params[:password])
        token = Auth.create_token user.id 
        render :ok, json: {  success: true, first_name: user.first_name, token: token }
      else
        render :unauthorized, json: { success: false, notice: "Invalid credentials" }  
      end
    end
    
    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    def login_params
      params.require(:user).permit(:email, :password)
    end
end
