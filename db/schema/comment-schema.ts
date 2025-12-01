import { pgTable, serial, text, timestamp, index } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';

export const comment = pgTable(
  'comment',
  {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index('comment_user_id_idx').on(table.userId),
  ]
);


