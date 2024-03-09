import { LastGames } from "@/components/last-games";
import { Hero } from "@/components/ui/background-grid";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { oracle } from "@/db/schema/oracle";

export default async function Home() {
  const result = await db.select().from(oracle);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Separator />
      <LastGames />

      {result.map((row) => {
        return (
          <div key={row.dpm}>
            <h1>{row.playername}</h1>
          </div>
        );
      })}
    </main>
  );
}
