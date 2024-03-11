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
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
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
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {row.original.blueTeamPicks.map((champion) => (
            <Avatar>
              <AvatarImage src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${champion}.png`} alt="" width={50} height={50} />
              <AvatarFallback>{champion}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: "",
    cell: ({ row }) => {
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        const day = date.getDate();
        return `${month} ${day}`;
      }
      return <div className="flex">{formatDate(row.original.date)}</div>
    },
  },
  {
    accessorKey: "redTeamPicks",
    header: "",

    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {row.original.redTeamPicks.map((champion) => (
            <Avatar>
              <AvatarImage src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${champion}.png`} alt="" width={50} height={50} />
              <AvatarFallback>{champion}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
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
