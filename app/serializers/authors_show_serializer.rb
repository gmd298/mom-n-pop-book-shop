class AuthorIndexSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :hometown

  has_many :books
end
