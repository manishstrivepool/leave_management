class HolidaysController < ApplicationController
	def index
		# => debugger
    @holidays = Holiday.all
  end

  def create
    @holiday = current_user.holidays.build(holiday_params)
    @holiday.save
    render status: 200, json: @holiday.to_json
  end

  def update
    @holiday = Holiday.find(params[:id])
    if @holiday.update(holiday_params)
      render status: 200, json: @holiday.to_json
    else
      render json: @holiday.errors, status: :unprocessable_entity
    end  
  end

  def destroy
    @holiday = Holiday.find(params[:id])
    @holiday.destroy
    head 200
  end

  private
    def holiday_params
      params.require(:holiday).permit(:date_from, :date_to, :leave_type, :status)
    end
end
