import { User } from "./user.interface";

export interface Post {
  id: string;
  image: string;
  caption: string;
  author: User;
  createdAt: string;
}

// export interface Post {
//   id: string; // Unique identifier for the post
//   user: {
//     id: string;
//     username: string;
//     profilePicture: string; // URL to the user's profile picture
//   };
//   media: string[]; // Array of media URLs (could be images or videos)
//   caption: string; // The text caption of the post
//   likes: {
//     count: number;
//     likedByCurrentUser: boolean; // Indicates if the logged-in user liked the post
//   };
//   comments: Comment[]; // Array of comments
//   createdAt: Date; // Timestamp for when the post was created
//   savedByCurrentUser: boolean; // Whether the post has been saved by the current user
// }

// // Comment interface for handling post comments
// export interface Comment {
//   id: string;
//   user: {
//     id: string;
//     username: string;
//     profilePicture: string; // URL to the user's profile picture
//   };
//   text: string; // The comment text
//   createdAt: Date; // Timestamp for when the comment was created
// }
