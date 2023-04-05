class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :link
      t.text :description
      t.string :title

      t.timestamps
    end
  end
end
