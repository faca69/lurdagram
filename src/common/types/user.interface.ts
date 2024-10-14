export interface User {
  id: string;
  name: string;
  username: string;
  profilePicture: string;
  description?: string;
  location?: string;
  joinDate: string;
  followers: User[];
  following: User[];
}
