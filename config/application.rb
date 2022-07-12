require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Capstone
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    config.action_dispatch.cookies_same_site_protection = :strict

    config.active_job.queue_adapter = :delayed_job

    config.action_mailer.delivery_method = :smtp
    config.action_mailer.default_url_options = { host: Rails.env.development? ? 'localhost:3000' : 'HOUZZ.com' }

    # SMTP settings for gmail
    config.action_mailer.smtp_settings = {
      :address              => "smtp.mailgun.org",
      :port                 => 587,
      :user_name            => "postmaster@sandbox9d20f401842a49f5889f1e3fcd7fd43e.mailgun.org",
      :password             => "8cee1d2fd552153a78112fc4fed75adf-18e06deb-e9a6ff38",
      :authentication       => "plain",
      domain: 'sandbox9d20f401842a49f5889f1e3fcd7fd43e.mailgun.org'
      # :enable_starttls_auto => true
    }
  end
end
