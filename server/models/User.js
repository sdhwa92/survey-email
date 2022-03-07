const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  credits: { type: Number, default: 0 },
});
userSchema.plugin(findOrCreate);

mongoose.model("users", userSchema);
