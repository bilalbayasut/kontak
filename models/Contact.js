const monggose = require("mongoose");

const ContactSchema = monggose.Schema({
  user: {
    type: monggose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = monggose.model("contact", ContactSchema);
