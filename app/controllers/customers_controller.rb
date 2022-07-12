class CustomersController < ApplicationController

  def create 
    customer = Customer.create!(customer_params)
    # SendCustomerEmailJob.set(wait: 10.seconds).perform_later(customer.id)
    CustomerMailer.with(customer: customer).welcome_email.deliver_later
    render json: customer, status: :created
  end

private

def customer_params
  params.permit(:first_name, :last_name, :email, :address, :city, :zip)
end

end
