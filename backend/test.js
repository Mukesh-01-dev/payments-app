const mongoose = require('mongoose');
const {User} = require('./db');

async function testSchema() {
  try {
    await mongoose.connect(
      'mongodb+srv://mukesh:mongodbpassword@practise-cluster.4uq6ier.mongodb.net/myDatabaseName?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB');

    const user = new User({
      username: 'Mukesh',
      password: '1228932',
      firstName: 'Muk',
      lastName: 'esh',
    });

    console.log('User to save:', user);

    const savedUser = await user.save();
    console.log('User saved:', savedUser);

    // This will throw validation error
    const invalidUser = new User({ age: -5 });
    await invalidUser.save();
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.connection.close();
  }
}

testSchema();