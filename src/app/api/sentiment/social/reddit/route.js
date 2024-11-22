import { NextResponse } from "next/server";
import { searchRedditPosts } from "../../../../../../utils/reddit";
import Sentiment from "sentiment";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { message: "Query parameter is required." },
      { status: 400 }
    );
  }

  const sentiment = new Sentiment();

  try {
    const posts = await searchRedditPosts(query);

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { message: "No Reddit posts found." },
        { status: 404 }
      );
    }

    // Process the Reddit posts
    const getData = posts.map((post) => {
      const result = sentiment.analyze(post.selftext || post.title || "");

      return {
        social: "reddit",
        score: result.score,
        analyzed:
          result.score > 0
            ? "positive"
            : result.score < 0
            ? "negative"
            : "neutral",
        id: post.id,
        user: post.author || "Unknown",
        username: post.author || "Unknown",
        text: post.selftext || post.title || "",
        created_at: post.created_utc,
        subreddit: post.subreddit || "Unknown",
        upvotes: post.ups || 0,
      };
    });

    return NextResponse.json(
      { message: "Success", data: getData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Reddit posts:", error);
    return NextResponse.json(
      { message: "Error fetching Reddit posts.", error: error.message },
      { status: 500 }
    );
  }
};
