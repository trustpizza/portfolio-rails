class AddDescriptionAndTitleToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :title, :text
    add_column :posts, :description, :text
  end
end
