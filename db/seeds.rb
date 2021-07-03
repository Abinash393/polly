require 'faker'

User.create!({
    first_name: 'john',
    last_name: 'doe',
    email: 'test@email.com',
    password: 'qwerty',
    password_confirmation: 'qwerty'
})