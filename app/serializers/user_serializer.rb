class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image

  has_many :posts
end
