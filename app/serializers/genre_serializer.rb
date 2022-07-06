class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre, :age_group

  has_many :book_genres
  has_many :books, through: :book_genres
  #has_many :authors <<<
  #has_many :stores <<<
end
