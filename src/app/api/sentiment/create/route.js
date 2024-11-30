import { connectDB } from "../../../../../lib/database";
import { SentimentModel } from "../../../../../lib/Models/Sentiment";

export const POST = async (request) => {
    try {
        await connectDB();
        const { userId, message, social, sentiment } = await request.json();

        const newSentiment = new SentimentModel({
            userId, message, social, sentiment
        })
        await newSentiment.save();
        return NextResponse.json({ message: "Sentiment review saved successfully" });

    } catch (err) {
        console.error(err);
        return NextResponse.status(500).json({ message: "Internal Server Error" });
    }
} 