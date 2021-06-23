class Api::V1::UsersController < ApplicationController
    # before_action :authenticate_user_using_x_token, only: [:show]
    
    def create
      begin
        user = User.create!(params[:user])
        # user = params[:user]
        render json: { success: true, user: user }
      rescue => e
        render json: { error: e }
      end
    end

    def login

    end

    def show
      
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
