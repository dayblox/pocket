import { NavBar } from "@/components/nav-bar"
import { ThemeProvider } from "@/components/theme-provider"
import { ViewTransitionsProvider } from "@/components/view-transitions-provider"
import "@/styles/globals.css"
import { GeistSans } from "geist/font"
import type { Metadata, ServerRuntime } from "next"

export const metadata: Metadata = {
  title: "PockeTool",
}

export const runtime: ServerRuntime = "edge"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ViewTransitionsProvider />
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
