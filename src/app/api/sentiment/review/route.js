import { NextResponse } from "next/server"
import { connectDB } from "../../../../../lib/database"
import { Sentiment } from "../../../../../lib/Models/Sentiment"

export const GET = async (request) => {
    try {
        await connectDB()
        const result = await Sentiment.find()
        return NextResponse.json({message: "Success", data: result}, { status: 200 })

    } catch (err) {
        return NextResponse.json({ message: err}, {status: 404})
    }
}