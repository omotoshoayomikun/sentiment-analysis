import { NextResponse } from "next/server";
import Sentiment from "sentiment";
import { twitter } from "../../../../../../utils/twitter";

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
    // Fetch tweets with required fields
    const tweets = await twitter.v2.search(query, {
      expansions: "author_id",
      "tweet.fields": "created_at,public_metrics,text",
      "user.fields": "username,public_metrics",
      max_results: 10,
    });

    if (!tweets || !tweets.data) {
      return NextResponse.json(
        { message: "No tweets found or Twitter API failed." },
        { status: 404 }
      );
    }


    const data =  tweets.data.data

    const getData = data.map((tweet) => {
      // Find the corresponding author from includes
      const author = tweets.data.includes?.users?.find(
        (user) => user.id === tweet.author_id
      );

      const result = sentiment.analyze(tweet.text);

      return {
        social: "twitter",
        score: result.score,
        analyzed:
          result.score > 0
            ? "positive"
            : result.score < 0
            ? "negative"
            : "neutral",
        id: tweet.id,
        user: author?.name || "Unknown",
        username: author?.username || "Unknown",
        text: tweet.text,
        created_at: tweet.created_at,
        impressions: tweet.public_metrics?.impression_count || 0,
        followers: author?.public_metrics?.followers_count || 0,
      };
    }); // Provide an empty array if tweets.data is not valid


    return NextResponse.json(
      { message: "Success", data: getData },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching tweets:", err);
    return NextResponse.json(
      { message: "An error occurred while fetching tweets.", error: err.message },
      { status: 500 }
    );
  }
};
