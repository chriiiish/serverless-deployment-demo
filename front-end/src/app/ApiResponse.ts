import { Tweet } from './Tweet';

export interface ApiResponse{
    ApiVersion: string;
    Tweet: Tweet;
}