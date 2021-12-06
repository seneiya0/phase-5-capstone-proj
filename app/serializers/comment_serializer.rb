class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user_id, :user

  belongs_to :user
end
