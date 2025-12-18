import mongoose from "mongoose";

export const conn = async () => {
    await mongoose.connect(process.env.MONGODB_URI + "/hire-2-fix")
    .then(() => {console.log("DB connected!")})
}