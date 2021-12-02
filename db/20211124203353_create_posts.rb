class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :likes
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
