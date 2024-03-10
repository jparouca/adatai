"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"

export type LastFive = {
  gameid: string;
  date: string;
  blueTeamPicks: string[];
  blueTeam: string;
  redTeamPicks: string[];
  redTeam: string;
}


export const columns: ColumnDef<LastFive>[] = [
  {
    accessorKey: "blueTeamPicks",
    header: "Blue Team Picks",
    cell: ({ row }) => {
      return <div>{row.original.blueTeamPicks.join(", ")}</div>;
    },
  },
  {
    accessorKey: "blueTeam",
    header: "Blue Team Name",
    cell: async ({ row }) => {

      const championSquare = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${row.original.}`)

      return <div><Image src={championSquare} /></div >;
    }
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "redTeam",
    header: "Red Team Name",
  },
  {
    accessorKey: "redTeamPicks",
    header: "Red Team Picks",
    cell: ({ row }) => {
      return <div>{row.original.redTeamPicks.join(", ")}</div>;
    },
  },
];


// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "redsidepick",
//     header: "RedsidePicks",
//   },
//   {
//     accessorKey: "redsideteam",
//     header: "pain Gaming",
//   },
//
//   {
//     accessorKey: "date",
//     header: "03-01",
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
//
//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
//   {
//
//     id: "actions",
//     cell: ({ row }) => {
//       const payment = row.original
//
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]