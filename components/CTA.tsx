import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative z-10 -mb-20">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-16 text-center mx-auto h-[400px] flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">
            Launch Your MVP<br />in 8 Weeks
          </h2>
          <div className="flex justify-center space-x-4">
            <Button className="px-12 py-8 rounded-full text-base" size={"lg"}>
             Get a Quote
            </Button>
          
          </div>
        </div>
      </div>
    </section>
  )
}