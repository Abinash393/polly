class Poll < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { minimum: 4, maximum: 128 }
  validates :option1, presence: true, length: { minimum: 1, maximum: 64 }
  validates :option2, presence: true, length: { minimum: 1, maximum: 64 }
  validates :option3, presence: true, length: { minimum: 1, maximum: 64 }
  validates :option4, presence: true, length: { minimum: 1, maximum: 64 }

  def poll_result
    sum = ( option1_votes + option2_votes + option3_votes + option4_votes ).to_f
    {
      option1_percent: vote_percent(sum, option1_votes),
      option2_percent: vote_percent(sum, option2_votes),
      option3_percent: vote_percent(sum, option3_votes),
      option4_percent: vote_percent(sum, option4_votes)
    }
  end

  def vote_percent(sum, option)
    ((option.to_f / sum) * 100.00).round(2)
  end
end
