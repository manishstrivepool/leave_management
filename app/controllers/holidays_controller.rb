class HolidaysController < ApplicationController
	def index
    @holidays = Holiday.where(user_id: current_user)
  end

  def create
    begin
      holiday = current_user.holidays.build(holiday_params)      
      holiday.save!
    rescue
      flash[:error] = holiday.errors.full_messages.join(", ").html_safe
    end
  end

  def update
    @holiday = Holiday.find(params[:id]) 
    if @holiday.update(holiday_params)
      render status: 200, json: @holiday.to_json
    end
  end

  def destroy
    @holiday = Holiday.find(params[:id])
    @holiday.destroy
  end

  private
    def holiday_params
      params.require(:holiday).permit(:date_from, :date_to, :leave_type, :description)
    end
end
