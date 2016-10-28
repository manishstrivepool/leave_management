class User < ApplicationRecord
	enum role: [:user, :admin]
	after_initialize :set_default_role, :if => :new_record?

	def set_default_role
    self.role ||= :user
  end

  has_many :holidays
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
