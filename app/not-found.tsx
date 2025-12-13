import { Button } from "@/components/ui/button"
import Link from "next/link"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <Button asChild className="">
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  )
}

export default ErrorPage
