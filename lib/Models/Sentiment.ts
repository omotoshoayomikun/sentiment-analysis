import mongoose from "mongoose";

const SentimentSchema = new mongoose.Schema({
    userId: String,
    message: {
        type: String,
        required: true
    },
    sentiment: {
        type: String,
        enum: ['positive', 'neutral', 'negative'],
        required: true
    },
    social: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Sentiment = mongoose.models.Sentiment || mongoose.model("Sentiment", SentimentSchema)