class CreatePostTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :post_topics do |t|
      t.integer :post_id
      t.integer :topic_id

      t.timestamps
    end
  end
end
