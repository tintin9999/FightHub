  
const mongoose = require("mongoose");

const GrindersSchema = new mongoose.Schema({
  userID: { type: String },
  guildID: { type: String },
  amount: { type: Number, default: 0 },
  days: { type: Number, default: 0},
  lastUpdated: { type: Number },
  time: { type: Number, default: 4320 }
});

module.exports = mongoose.model('grinderschema', GrindersSchema);