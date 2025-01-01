import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://alan_agarwal_P1:lQOXHMH9w9Hup6Kn@cluster0.r5qmm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}