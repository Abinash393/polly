class User < ApplicationRecord
  has_secure_password
  
  before_validation :normalize_email

  validates :first_name, presence: true, length: {minimum:3, maximum:16}
  validates :last_name, presence: true, length: {minimum:3, maximum:16}
  validates :email, uniqueness: { message: "duplicate email" },
                  presence: true,
                  format: { with: URI::MailTo::EMAIL_REGEXP
                }
  validates :password, presence: true, confirmation: { case_sensitive: true },
            length: { in: Devise.password_length }

  def normalize_email
    self.email = self.email.downcase.strip
  end
end
