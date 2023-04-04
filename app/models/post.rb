class Post < ApplicationRecord
    validates :title, presence: true
    has_rich_text :content
    has_one_attached :thumbnail #, resize_to_limit: [100, 100]
end
