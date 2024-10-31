import mongoose from'mongoose';

const MongoDb = process.env.MongoDb;

export const connectDB = async() => {
    try {
       await mongoose.connect(MongoDb)
       console.log("Database connected!!!!")

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}