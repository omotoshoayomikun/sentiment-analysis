import { NextResponse } from "next/server"
import { connectDB } from "../../../../../../lib/database"
import { User } from "../../../../../../lib/Models/User"

export const GET = async (request, {params}) => {
    try {
        await connectDB()
        const id = params.id
        const result = await User.findOne({_id: id})
        if(result) {
            return NextResponse.json({message: "Success", data: result}, { status: 200 })
        } else {
            return NextResponse.json({message: "An Error Occur"}, { status: 500 })

        }

    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500})
    }
}