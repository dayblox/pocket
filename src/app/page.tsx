import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction, Loader2 } from "lucide-react"

export default function Home() {
  return (
    <main className="container grid lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Website status
            <Loader2 className="animate-spin" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          Under construction
          <Construction />
        </CardContent>
      </Card>
    </main>
  )
}
