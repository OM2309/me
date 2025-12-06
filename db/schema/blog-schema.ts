import { pgTable, serial, text, timestamp, index } from 'drizzle-orm/pg-core';

export const blog = pgTable('blog', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(), 
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
}, (table) => [
  index('blog_title_idx').on(table.title),
  index('blog_slug_idx').on(table.slug),
]);