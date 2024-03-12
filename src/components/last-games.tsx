import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TOURNAMENTS } from "@/config/constants"
import { LastFive, columns } from "./LastGames/columns"
import { DataTable } from "./LastGames/data-table"
import { db } from "@/db"
import { oracle } from "@/db/schema/oracle"
import { and, desc, sql } from "drizzle-orm"


async function getData(): Promise<LastFive[]> {
  const lastFive = await db.selectDistinct({ gameid: oracle.gameid }).from(oracle).orderBy(desc(oracle.date)).limit(100)

  const lastFiveData = [];
  for (const { gameid } of lastFive) {
    const blueTeamPicks = await db.select({ champion: oracle.champion, teamname: oracle.teamname, date: oracle.date }).from(oracle)
      .where(
        and(
          sql`${oracle.gameid} =  ${gameid}`,
          sql`${oracle.side} = 'Blue'`
        ))

    const redTeamPicks = await db.select({ champion: oracle.champion, teamname: oracle.teamname }).from(oracle)
      .where(
        and(
          sql`${oracle.gameid} =  ${gameid}`,
          sql`${oracle.side} = 'Red'`
        ))

    lastFiveData.push({
      date: blueTeamPicks[0].date,
      gameid: gameid,
      blueTeam: blueTeamPicks[0].teamname,
      redTeam: redTeamPicks[0].teamname,
      blueTeamPicks: blueTeamPicks.map(player => player.champion),
      redTeamPicks: redTeamPicks.map(player => player.champion),
    });
  }

  return lastFiveData;
}

export async function LastGames() {
  const data = await getData()

  return (
    <>
      <Tabs defaultValue="account" className="mt-10 h-svh">
        <TabsList className="grid w-full grid-cols-10">
          {TOURNAMENTS.map((tournament) => (
            <TabsTrigger value={tournament.toString().toLowerCase()} className="data-[state=active]:text-primary">{tournament}</TabsTrigger>
          ))}
        </TabsList>
        {TOURNAMENTS.map((tournament) => (

          <TabsContent value={tournament.toString().toLowerCase()}>
            <Card>
              <CardHeader>
                <CardTitle>{tournament}</CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable columns={columns} data={data} />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs >
    </>
  )
}

