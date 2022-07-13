class Author < ApplicationRecord
  has_many :books
  has_many :stores, through: :books
  
  has_many :book_genres, through: :books
  #has_many :genres, through: :books <<<
  #has_many :genres, through: :book_genres <<<
  # data  = Author.includes(book_genres: :genre).where(id: 1)
  # data.book_genres.map do |book_genre|
  #   book_genre.genre.name
  # end

  def self.alphabetize(column_name)
    self.order(column_name => :asc)
  end
end
