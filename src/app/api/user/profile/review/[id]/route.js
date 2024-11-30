import { NextResponse } from "next/server"
import { SentimentModel } from "../../../../../../../lib/Models/Sentiment"
import { connectDB } from "../../../../../../../lib/database"

export const GET = async (request, {params}) => {
    try {
        await connectDB()
        const id = params.id
        const result = await SentimentModel.find({userId: id})
        if(result) {
            return NextResponse.json({message: "Success", data: result}, { status: 200 })
        } else {
            return NextResponse.json({message: "An Error Occur"}, { status: 500 })

        }

    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500})
    }
}