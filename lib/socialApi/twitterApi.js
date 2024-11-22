import { twitter } from "../../utils/twitter";

export default async function GetTwitter(query) {
  try {
    if (!query) return null;

    const tweets = await twitter.v2.search(query, {
        'tweet.fields': 'created_at,author_id,text',
        "user.fields": "name,username,public_metrics",
        max_results: 10
    })

    // if(tweets) {
    //     return tweets
    // } else {
    //     return null;
    // }
    console.log(tweets)

    if(tweets) return tweets
    else return null;


  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
