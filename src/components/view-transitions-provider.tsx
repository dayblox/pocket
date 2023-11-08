"use client"

import { AutoViewTransitionsOnClick } from "use-view-transitions/react"

export function ViewTransitionsProvider() {
  return <AutoViewTransitionsOnClick match="a[href]" />
}
