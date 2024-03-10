import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema",
  driver: 'turso',
  dbCredentials: {
    authToken: process.env.TURSO_AUTH_TOKEN,
    url: process.env.TURSO_URL!,
  }
} satisfies Config;
