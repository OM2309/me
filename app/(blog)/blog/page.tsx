import BlogPost from "@/components/blog-post";
import PageHeader from "@/components/page-header";
import { Suspense } from "react";
import Loading from "./loading";

export default function BlogPage() {
  return (
    <div className="space-y-2">
      <PageHeader
        title="Writing"
        description="Thoughts on building software, tools I use, and things I learn along the way."
      />
      <Suspense fallback={<Loading />}>
        <BlogPost hideHeading />
      </Suspense>
    </div>
  );
}
