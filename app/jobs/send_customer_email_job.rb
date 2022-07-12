class SendCustomerEmailJob < ApplicationJob
  queue_as :default

  def perform(customer_id)
    customer = Customer.find_by(id: customer_id)
    return if customer.nil?

    email = customer.email
    Rails.logger.info "Running SendCustomerEmailJob..."
  end
end