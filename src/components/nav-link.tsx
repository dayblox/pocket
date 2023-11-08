"use client"

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type NavLinkProps = {
  label: string
}

export function NavLink({ label, ...props }: LinkProps & NavLinkProps) {
  const inactive = usePathname() !== props.href

  return (
    <Link
      {...props}
      className={cn(
        "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-[12.5%] after:right-0 after:h-0.5 after:w-[75%] after:bg-primary after:[view-transition-name:nav-line] hover:text-primary",
        { "text-muted-foreground after:hidden": inactive },
      )}
    >
      {label}
    </Link>
  )
}
