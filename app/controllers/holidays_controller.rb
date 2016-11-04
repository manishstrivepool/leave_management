class HolidaysController < ApplicationController
	def index
    @holidays = Holiday.where(user_id: current_user)
  end

  def create
    if (holiday_params[:date_from] <= holiday_params[:date_to])
      @holiday = current_user.holidays.build(holiday_params)      
      @holiday.save
    end
  end

  def update
    @holiday = Holiday.find(params[:id])
    if (holiday_params[:date_from] <= holiday_params[:date_to])  
      if @holiday.update(holiday_params)
        render status: 200, json: @holiday.to_json
      end 
    end 
  end

  def destroy
    @holiday = Holiday.find(params[:id])
    @holiday.destroy
  end

  private
    def holiday_params
      params.require(:holiday).permit(:date_from, :date_to, :leave_type)
    end
end
