const User = require('../modules/users/models/User')

const seedUsers = async () => {
  try {
    const user = new User({
      name: 'Kayode Adeniyi',
      email: 'kayade@example.com',
      password: 'kayade@example.com'
    })
    await user.save()
  } catch (e) {}
}

seedUsers()

