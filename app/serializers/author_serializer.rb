class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :bio

  has_many :books
  has_many :stores, through: :books
end
