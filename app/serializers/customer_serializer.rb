class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :address, :city, :zip
end
