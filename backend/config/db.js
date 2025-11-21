import mongoose from "mongoose";

const connectDB = async()=> {
    try {
       await mongoose.connect(process.env.DB_URL);
       console.log("MongoDB connected sucessfully ✅ 🎉 ");
    } catch (error) {
        console.error("Error while connecting with MongoDB ❌", error)
        process.exit(1);
    }
}

export default connectDB;