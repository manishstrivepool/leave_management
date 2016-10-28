class AddUserIdToHoliday < ActiveRecord::Migration[5.0]
  def change
    add_column :holidays, :user_id, :integer, foreign_key: true
  end
end
