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
    @user.first_name = nil
    assert_not @user.valid?
  end

  def test_user_should_be_not_be_valid_without_last_name
    @user.last_name = nil
    assert_not @user.valid?
  end

  def test_user_should_be_not_be_valid_without_email
    @user.email = nil
    assert_not @user.valid?
  end

  def test_user_should_be_not_be_valid_with_invalid_email
    @user.email = "notAemail.com"
    assert_not @user.valid?
  end

  def test_user_should_be_not_be_valid_without_password 
    @user.password = nil 
    assert_not @user.valid?
  end

  def test_user_should_be_not_be_valid_without_password_confirmation
    @user.password_confirmation = nil
    assert_not @user.valid?
  end
end
