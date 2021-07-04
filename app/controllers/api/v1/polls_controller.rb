class Api::V1::PollsController < ApplicationController
  before_action :require_auth, only: %i[ create edit update destroy vote ]
  before_action :require_poll, only: %i[ edit update destroy show vote ]

  attr_accessor :poll

  def index
    polls = Poll.all
    render json: { success: true, polls: polls }
  end

  def show
    render json: { success: true, poll: poll }
  end

  def update
    updated_poll = poll.update(poll_params)
    render json: { success: false, notice: "Unable to update" }  unless updated_poll
    render json: { success: true, notice: "Poll successfully updated" }
  end

  def create
    poll = current_user.polls.create!(poll_params)
    unless poll
      render json: { success: false }
    end
    render json: {  success: true, notice: "Poll successfully created" }
  end

  def destroy
    if poll.destroy
      render json: { success: true, notice: "Poll deleted" }
    end
  end

  def vote
    unless [1, 2, 3, 4].include? vote_params[:option]
      render json: { success: false, notice: "Wrong option" }
    end
    option = "option#{vote_params[:option]}_votes".to_sym
    poll.increment!(option)
    poll_result = poll.poll_result
    render json: { success: true, result: poll_result } if poll_result.present?
  end

  private

  def require_poll
    set_poll
    return if poll.present?
    render json: { success: false, notice: "Poll not found" }
  end

  def set_poll
    poll_id = params[:id] || params[:poll][:id]
    @poll = Poll.find(poll_id)
  end

  def poll_params
    params.require(:poll).permit(:title, :option1, :option2, :option3, :option4)
  end

  def vote_params
    params.require(:poll).permit(:id, :option)
  end
end
