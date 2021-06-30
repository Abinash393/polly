class CreatePolls < ActiveRecord::Migration[6.0]
  def up
    create_table :polls, id: :uuid do |t|
      t.string :user_id, null: false, foreign_key: true
      t.string :title, null: false, limit: 64 
      t.string :option1, null: false, limit: 64 
      t.string :option2, null: false, limit: 64 
      t.string :option3, null: false, limit: 64 
      t.string :option4, null: false, limit: 64 
      t.bigint :option1_votes, default: 0
      t.bigint :option2_votes, default: 0
      t.bigint :option3_votes, default: 0
      t.bigint :option4_votes, default: 0
      t.timestamps
    end
  end

  def down
    drop_table :polls
  end
end
