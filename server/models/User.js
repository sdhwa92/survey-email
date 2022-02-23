const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
});
userSchema.plugin(findOrCreate);

mongoose.model("users", userSchema);
