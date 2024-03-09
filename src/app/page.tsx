import { LastGames } from "@/components/last-games";
import { Hero } from "@/components/ui/background-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LastGames />

    </main>
  );
}
