import { NextResponse } from "next/server"
import { connectDB } from "../../../../../lib/database"

export const POST = async (request) => {
    try {
        await connectDB()
       return NextResponse.json({message: "Database connection established successfully"})
    } catch (err) {
        console.log(err)
       return NextResponse.json({message: "An error occurred"})
    }
}