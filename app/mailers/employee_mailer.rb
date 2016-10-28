class EmployeeMailer < ApplicationMailer
	default from: 'coolmanish.champ@gmail.com'

	# def sample_email(user)
 #    @user = user
 #    mail(to: @user.email, subject: 'Leave Request Email', body: '')
 #  end

  def sample_email(user)
    @user = user    
     mail(to: @user.email, subject: 'New Leave Application')    
  end

end
