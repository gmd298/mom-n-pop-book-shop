class CustomersController < ApplicationController

  # RAILS_ENV=development bin/delayed_job start
  # mailcatcher .. visit http://127.0.0.1:1080/ to see email

  def create 
    customer = Customer.create!(customer_params)
    # SendCustomerEmailJob.set(wait: 10.seconds).perform_later(customer.id)
    # deliver_now
    CustomerMailer.with(customer: customer).welcome_email.deliver_later(wait: 10.seconds)
    render json: customer, status: :created
  end

private

def customer_params
  params.permit(:first_name, :last_name, :email, :address, :city, :zip)
end

end
