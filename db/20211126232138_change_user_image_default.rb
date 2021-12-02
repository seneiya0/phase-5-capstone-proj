class ChangeUserImageDefault < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:users, :image, "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png")
  end
end
