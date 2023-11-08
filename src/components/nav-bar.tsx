import { NavLink } from "./nav-link"
import { ThemeToggle } from "./theme-toggle"
import { UserNav } from "./user-nav"

export function NavBar() {
  return (
    <div className="mb-3 border-b py-3">
      <div className="container flex items-center justify-between gap-4">
        <nav className="flex gap-4">
          <NavLink href="/" label="Dashboard" />
        </nav>
        <div className="flex gap-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  )
}
