class AuthorIndexSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :hometown
end
