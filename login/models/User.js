const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Please Enter a username',
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        // server side validation for email address
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Enter an Email Address',
    },
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
