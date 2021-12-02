class PostTopicSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :topic_id

  belongs_to :post
  belongs_to :topic
end
