import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

let isConnected = false;
if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
}
async function dbConnect() {
    try {
        const db = await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected", db.connection.host, db.connection.name);
        isConnected = db.connections[0].readyState === 1
    } catch (error) {
        console.error("MongoDB connection error", error);
        throw error;
    }
}

export default dbConnect;