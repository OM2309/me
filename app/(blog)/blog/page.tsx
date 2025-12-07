import BlogPost from "@/components/blog-post";
import { Suspense } from "react";
import Loading from "./loading";

export default function BlogPage() {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <BlogPost />
      </Suspense>
    </div>
  )
}