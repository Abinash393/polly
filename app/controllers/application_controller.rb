class ApplicationController < ActionController::Base
    include Pundit

    rescue_from ActiveRecord::RecordNotFound, with: :resources_not_avalable
    rescue_from RuntimeError, with: :server_side_error

    skip_before_action :verify_authenticity_token

    private

    def resources_not_avalable
        render status: :bad_request, json: { success: false, notice: "Resource not avalable" }
    end

    def server_side_error
      render status: :internal_server_error, json: { success: false, notice: "Something went wrong" }
    end
end
