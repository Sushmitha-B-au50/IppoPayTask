const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


//users collection
const userSchema  = new mongoose.Schema(
    {
        password: String,
        result:Number
    }
)

const Users = new mongoose.model("Users", userSchema);

module.exports = Users;