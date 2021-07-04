class ApplicationController < ActionController::Base
    include Pundit

    attr_accessor :current_user
    before_action :set_current_user

    rescue_from ActiveRecord::RecordNotFound, with: :resources_not_avalable
    rescue_from RuntimeError, with: :server_side_error

    skip_before_action :verify_authenticity_token
    
    private

    def require_auth
      return if current_user.present?
      render :unauthorized, json: { success: false, notice: "Unauthorized" }
    end

    def set_current_user
      token = request.headers["X-Auth-Token"]
      user_id = Auth.user_id_from_jwt token
      @current_user = User.find(user_id) rescue nil
    end

    def resources_not_avalable(err)
      render status: :bad_request, json: { success: false, notice: "Resource not avalable" }
    end

    def server_side_error
      render status: :internal_server_error, json: { success: false, notice: "Something went wrong" }
    end
end
