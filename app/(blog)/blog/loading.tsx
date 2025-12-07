import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <Card
            key={i}
            className="overflow-hidden border-border/50 animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="relative h-56 bg-muted">
              <Skeleton className="w-full h-full rounded-none" />
            </div>

            {/* Content Skeleton */}
            <CardHeader className="pt-6 space-y-4">
              <Skeleton className="h-7 w-4/5 rounded-lg" />
              <Skeleton className="h-5 w-full rounded-lg" />
              <Skeleton className="h-5 w-3/4 rounded-lg" />
            </CardHeader>

            <CardFooter className="justify-between">
              <Skeleton className="h-4 w-32 rounded-lg" />
              <Skeleton className="h-4 w-24 rounded-lg" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}