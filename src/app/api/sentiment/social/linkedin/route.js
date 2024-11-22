import { NextResponse } from "next/server";
import { fetchLinkedInPosts } from "../../../../../../utils/linkedin";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { message: "Query parameter is required." },
      { status: 400 }
    );
  }

  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN; // Replace or dynamically fetch
    const posts = await fetchLinkedInPosts(accessToken, query);

    return NextResponse.json(
      { message: "Success", data: posts },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching LinkedIn posts:", err.message);
    return NextResponse.json(
      { message: "An error occurred while fetching LinkedIn posts.", error: err.message },
      { status: 500 }
    );
  }
};
