import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="relative flex flex-col items-center text-center">
        <SmallTitle title="Welcome to Lucis"/>
        <h1 className="mb-6 max-w-4xl text-center text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Your Complete School Management Solution
        </h1>
        <p className="mb-12 max-w-2xl text-center text-lg text-gray-600">
        From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg"  className="rounded-full h-12 px-6 text-base">
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-gray-200 px-6 text-base text-gray-900 hover:bg-gray-100"
          >
            See all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

