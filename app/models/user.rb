# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :photo
  has_many :cart_items
  has_many :cart_games,
    through: :cart_items,
    source: :game

  # associations for library
  has_many :library_items,
    foreign_key: :user_id,
    class_name: :Library

  has_many :library_games,
    through: :library_items,
    source: :game

  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  
  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
  
  def reset_session_token!
    update!(session_token: generate_session_token)
    session_token
  end
  
  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end
end
