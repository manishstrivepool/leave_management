class Holiday < ApplicationRecord

	belongs_to :user

  validates :date_from, :date_to, :leave_type, :description, presence: true
  validate :date_validate

  def date_validate
    if date_from > date_to
    	errors.add(:date, "Please correct your 'Dates' for leave")
    end
  end
end
