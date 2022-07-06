class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  belongs_to :author
  belongs_to :store

  has_many :book_genres
  has_many :genres, through: :book_genres
end
