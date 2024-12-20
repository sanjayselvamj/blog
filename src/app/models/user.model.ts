export interface User {
  userId?: number; // Optional userId property
  username: string;
  password: string;
}
interface LoginResponse {
  success: boolean;
  token?: string;
  username?: string; // Optional if needed
  userId?: number;    // Add this to resolve the error
}
