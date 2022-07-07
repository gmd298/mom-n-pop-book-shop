class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :location

  has_many :books
end
