class Post < ApplicationRecord
    validates :title, presence: true
    has_rich_text :content

    has_one_attached :thumbnail do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
      end
end
