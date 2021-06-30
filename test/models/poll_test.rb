require 'test_helper'

class PollTest < ActiveSupport::TestCase
  def setup
    @user = User.new({
      first_name: 'john',
      last_name: 'doe',
      email: 'test@email.com',
      password: 'qwerty',
      password_confirmation: 'qwerty'
    })

    @poll = @user.polls.new(
      title: "ruby is developer friendly",
      option1: "Yes",
      option2: "No",
      option3: "Maybe",
      option4: "JavaScript is better"
    )
  end

  def test_poll_should_not_be_valid_without_title
    @poll.title = nil
    assert_not @poll.valid?
  end

  def test_poll_should_not_be_valid_with_long_title
    @poll.title = "f" * 200
    assert_not @poll.valid?
  end

  def test_poll_should_not_be_valid_without_option1
    @poll.option1 = nil
    assert_not @poll.valid?
  end
  
  def test_poll_should_not_be_valid_without_option2
    @poll.option2 = nil
    assert_not @poll.valid?
  end

  def test_poll_should_not_be_valid_without_option3
    @poll.option3 = nil
    assert_not @poll.valid?
  end

  def test_poll_should_not_be_valid_without_option4
    @poll.option4 = nil
    assert_not @poll.valid?
  end
end
