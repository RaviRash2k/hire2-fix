import mongoose from "mongoose";

const technicianProfileSchema = new mongoose.Schema({
  nicFront: String,
  nicBack: String,
  address: String,
  workingLocation: String,
  categories: [String],
  workingDays: [String],
  workingHours: String,
  bestTimeToCall: String,

  isApproved: {
    type: Boolean,
    default: false
  },

  appliedAt: Date,
  approvedAt: Date
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  mobile: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["customer", "technician", "admin"],
    default: "customer"
  },

  profileImage: {
    type: String,
    default: ""
  },

  technicianProfile: technicianProfileSchema,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema)

export default userModel;