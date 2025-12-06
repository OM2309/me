declare module "better-auth" {
  interface User {
    userType: "user" | "admin";
  }

  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      image: string | null;
      userType: "user" | "admin";
    };
  }
}