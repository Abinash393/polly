class User < ApplicationRecord
  has_secure_password

  has_many :polls
  
  before_validation :normalize_email

  validates :first_name, presence: true, length: {minimum:3, maximum:16}
  validates :last_name, presence: true, length: {minimum:3, maximum:16}
  validates :email, uniqueness: { message: "duplicate" },
                  presence: true,
                  length: { maximum: 50 },
                  format: { with: URI::MailTo::EMAIL_REGEXP
                }
  validates :password, presence: true, length: { in: Devise.password_length }
  validates :password_confirmation, { presence: { case_sensitive: true } }

  def self.authenticate(username, password)
  end
  
  private

  def normalize_email
    email = email.downcase.strip if email.present?
  end

end
