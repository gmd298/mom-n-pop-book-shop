class Book < ApplicationRecord
  belongs_to :author
  belongs_to :store

  has_many :books_genres
  has_many :genres, through: :book_genres
end
