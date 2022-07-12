# app/mailers/user_mailer.rb
class CustomerMailer < ApplicationMailer
  def welcome_email
    @customer = params[:customer]
    mail(to: @customer.email, subject: 'Welcome to My Awesome Site')
  end
end
