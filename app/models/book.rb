class Book < ApplicationRecord
  belongs_to :author
  belongs_to :store

  has_many :book_genres
  has_many :genres, through: :book_genres

  def height
    20
  end
end
