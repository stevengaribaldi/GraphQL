const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
  },
  status: {
    type: String,
    required: [true, "Please add a status"],
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});
module.exports = mongoose.model("Project", ProjectSchema);
