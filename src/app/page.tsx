import { LastGames } from "@/components/last-games";
import { Hero } from "@/components/ui/background-grid";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Separator />
      <LastGames />

    </main>
  );
}
