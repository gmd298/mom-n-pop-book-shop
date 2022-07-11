class Book < ApplicationRecord
  belongs_to :author
  belongs_to :store

  has_many :book_genres
  has_many :genres, through: :book_genres

  def self.custom_order(column_name)
    self.order(column_name => :desc)
  end
end
