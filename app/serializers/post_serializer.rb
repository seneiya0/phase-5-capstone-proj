class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :likes, :image, :user_id, :created_at, :user

  belongs_to :user
  has_many :topics
  has_many :comments
end
