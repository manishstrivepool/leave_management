class SetDefaultStatusToHolidays < ActiveRecord::Migration[5.0]
  def change
  	change_column :holidays, :status, :string, default: "Pending"
  end
end
