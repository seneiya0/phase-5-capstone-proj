class User < ApplicationRecord
    has_many :posts
    has_many :comments
    validates :username, :password, presence: true
    validates :username, uniqueness: true

    has_secure_password

end
