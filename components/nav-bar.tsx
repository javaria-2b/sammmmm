import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-black rounded" />
            <span className="text-xl font-semibold">Popcorn</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
            <Link href="/manifesto" className="text-sm font-medium hover:text-gray-600">
              Manifesto
            </Link>
            <Link href="/research" className="text-sm font-medium hover:text-gray-600">
              Research
            </Link>
            <Link href="/careers" className="text-sm font-medium hover:text-gray-600">
              Careers
            </Link>
          </nav>
        </div>
        <Button variant="default" className="bg-zinc-900 hover:bg-zinc-800">
          Sign up
        </Button>
      </div>
    </header>
  )
}

