'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Terminal } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-lg p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-500 p-4">
            <Terminal className="h-6 w-6 text-white" />
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        
        <p className="mb-8 text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            variant={"default"}
            onClick={() => router.push('/')}
          >
            Go to Homepage
          </Button>
          <Button 
            variant="outline"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SchoolPro. All rights reserved.
        </p>
      </Card>
    </div>
  )
}

