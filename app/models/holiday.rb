class Holiday < ApplicationRecord
	belongs_to :user

	# after_create do
	# 	EmployeeMailer.sample_email(self.user).deliver_now
 #    #EmployeeMailer.sample_email(User.last).deliver_now    
 #  end

  def to_s
    self.email
  end
end
