const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            function(email) {
                return  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
            }
        },
        message: 'Please enter a valid email address!',
    },
    thoughts : [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
    },],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },],
    toJSON : {
        virtuals: true,
    },
    id: false,
},
);

userSchema.virtuals('friendCount').get(function() {
    return this.friends.length;
});
const User = model('User', userSchema)
module.exports = User;