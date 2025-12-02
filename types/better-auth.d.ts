import "better-auth";

declare module "better-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      userType: string; 
    };
  }
}
