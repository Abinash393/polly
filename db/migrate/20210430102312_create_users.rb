class CreateUsers < ActiveRecord::Migration[6.0]
  def up
    create_table :users, id: :uuid do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false

      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
