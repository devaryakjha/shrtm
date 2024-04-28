import { clerkMiddleware } from "@clerk/nextjs/server";
import type { MiddlewareConfig } from "next/server";

export default clerkMiddleware({ debug: true });

export const config: MiddlewareConfig = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
