import { UserType } from "core/api/baseApi";
import "next-auth";

declare module "next-auth" {
  interface User {
    id?: number; // Or string
    jwtToken?: string | null;
    role?: UserType | undefined;
  }

  interface Session {
    user: User;
  }
}