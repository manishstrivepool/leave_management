class AddDescriptionToHolidays < ActiveRecord::Migration[5.0]
  def change
  	add_column :holidays, :description, :text
  end
end
