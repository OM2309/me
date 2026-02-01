CREATE TABLE "profile_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"ip" "inet" NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX "profile_views_ip_unique" ON "profile_views" USING btree ("ip");