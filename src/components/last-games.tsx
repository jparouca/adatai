import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TOURNAMENTS } from "@/config/constants"

export function LastGames() {
  return (
    <Tabs defaultValue="account" className="mt-10">
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
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs >
  )
}

