require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new({
              first_name: 'john',
              last_name: 'doe',
              email: 'test@email.com',
              password: 'qwerty',
              password_confirmation: 'qwerty'
            })
  end

  def test_user_should_be_not_be_valid_without_first_name
    @user.first_name = ''
    assert_not @user.valid?
    assert_equal ["First name can't be blank"], @user.errors.full_messages
  end

  def test_user_should_be_not_be_valid_without_last_name
    @user.last_name = ''
    assert_not @user.valid?
    assert_equal ["Last name can't be blank"], @user.errors.full_messages
  end

  def test_user_should_be_not_be_valid_without_email
    @user.email = ""
    assert_not @user.valid?
    assert_equal ["E-mail can't be blank"], @user.errors.full_messages
  end

  def test_user_should_be_not_be_valid_without_password 
    @user.password = ""
    assert_not @user.valid?
    assert_equal ["Password can't be blank"], @user.errors.full_messages
  end
end
