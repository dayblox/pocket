import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logIn, logOut } from "@/lib/client"
import { LogOut, User } from "lucide-react"

export async function UserNav() {
  const session = await auth()

  if (!session?.user)
    return (
      <Button variant="outline" className="whitespace-nowrap" onClick={logIn}>
        Sign in
      </Button>
    )

  const { email, image, name } = session.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar className="rounded-md">
            <AvatarImage
              src={image!}
              alt={name!}
              referrerPolicy="no-referrer"
            />
            <AvatarFallback className="rounded-md" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          Profile
          <User className="ml-auto h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logOut}>
          Log out
          <LogOut className="ml-auto h-[1.2rem] w-[1.2rem]" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
