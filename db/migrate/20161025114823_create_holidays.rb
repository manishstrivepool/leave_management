class CreateHolidays < ActiveRecord::Migration[5.0]
  def change
    create_table :holidays do |t|
      t.date :date_from
      t.date :date_to
      t.string :leave_type
      t.string :status

      t.timestamps
    end
  end
end
