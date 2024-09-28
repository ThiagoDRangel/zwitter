import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1,
    user: user,
    body: 'Twwiter continua banido no Brasil',
    image: 'https://olhardigital.com.br/wp-content/uploads/2024/08/elon-musk-twitter-x-1.jpg',
    likeCount: 999,
    commentCount: 51,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 23, 9, 21, 44)
}