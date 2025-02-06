import { NextResponse } from "next/server";
import { searchRedditPosts } from "../../../../../../utils/reddit";
import Sentiment from "sentiment";
import { SentimentModel } from "../../../../../../lib/Models/Sentiment";
import { connectDB } from "../../../../../../lib/database";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const TotalPosts = [];

  // Helper function to randomly select a value from an array
  const getRandomSocial = () => {
    const socialPlatforms = [
      "facebook",
      "Instagram",
      "twitter",
      "snapchat",
      "tiktok",
    ];
    return socialPlatforms[Math.floor(Math.random() * socialPlatforms.length)];
  };

  if (!query) {
    return NextResponse.json(
      { message: "Query parameter is required." },
      { status: 400 }
    );
  }

  const sentiment = new Sentiment();

  try {
    await connectDB();
    const posts = await searchRedditPosts(query);

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { message: "No Reddit posts found." },
        { status: 404 }
      );
    }

    // const messages = await SentimentModel.find({
    //  message: { $regex: query, $options: "i"} }).populate("userId");

    // if (messages.length > 0) {
    //   messages.forEach((value) => {
    //     const result = sentiment.analyze(value.message);
    //     TotalPosts.push({
    //       id: value._id,
    //       score: result.score,
    //       analyzed:
    //         result.score > 0
    //           ? "positive"
    //           : result.score < 0
    //           ? "negative"
    //           : "neutral",
    //       user: value.userId ? value.userId._id : null,
    //       username: value.userId?.firstname || value.userId?.email || "Unkonwn",
    //       social: "Database",
    //       text: value.message,
    //       created_at: new Date (value.createdAt).toISOString(),
    //     });
    //   });
    // }

    // Process the Reddit posts
    if (posts && posts.length > 0) {
      posts.forEach((post) => {
        const result = sentiment.analyze(post.selftext || post.title || "");
  
        TotalPosts.push({
          social: getRandomSocial(),
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
          created_at: new Date(post.created_utc * 1000).toISOString(),
          subreddit: post.subreddit || "Unknown",
          upvotes: post.ups || 0,
        })
  
      });
    }

    return NextResponse.json(
      { message: "Success", data: TotalPosts },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Error fetching posts.", error: error.message },
      { status: 500 }
    );
  }
};
