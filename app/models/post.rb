class Post < ApplicationRecord
    has_many :post_topics
    has_many :topics, through: :post_topics
    belongs_to :user

    validates :title, :body, presence: true
    validates :body, length: { in: 1..10000 }

end
