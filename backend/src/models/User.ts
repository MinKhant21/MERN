const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role :{
     type:String,
     enum:['user','admin'],
     default:'user'
  }
});

let UserModel;

// Check if the model already exists to avoid redefining it
if (mongoose.models.User) {
  UserModel = mongoose.model("User");
} else {
  UserModel = mongoose.model("User", UserSchema);
}

export default UserModel;
