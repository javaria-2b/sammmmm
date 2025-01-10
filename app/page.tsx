import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, MapPin, Phone, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, QrCode } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full py-16 md:py-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="space-y-2 mb-6 text-center w-full">
            <p className="text-sm text-gray-600">Fast and Reliable MVP Development</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight">
              Build an MVP
              <br />
              in 8 weeks
            </h1>
          </div>
          <div className="max-w-2xl w-full space-y-8 text-center">
            <div className="space-y-2">
              <p className="text-xl text-gray-600">Fast, cost-effective MVP development agency with packages to fit any budget.</p>
              <p className="text-gray-500">Make your idea an investor-ready reality.</p>
            </div>
            <div className="flex max-w-md mx-auto gap-2">
              <Input type="email" placeholder="Enter your e-mail" className="h-12" />
              <Button className="h-12 px-8 bg-zinc-900 hover:bg-zinc-800">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image 
            src="/api/placeholder/1600/600"
            alt="Decorative waves"
            width={1400}
            height={400}
            className="w-full h-auto bg-gray-400 rounded-3xl"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto p-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif">
                Expert Guidance
                <br />
                Throughout Development
              </h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto p-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif">
                Tailored Solutions
                <br />
                For Every Budget
              </h3>
              <p className="text-sm text-gray-500">*Customizable packages available</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto p-4">
                <X className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif">
                Risk-Free
                <br />
                With Full Support
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-2">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">
              Get Started
              <br />
              With Ease
            </h2>
            <div className="space-y-2">
              <p className="text-xl text-gray-600">Your MVP, investor-ready in 8 weeks.</p>
              <p className="text-gray-500">From idea to launch without delays.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            <Card className="bg-[#f5f9f7] flex flex-col">
              <CardContent className="p-6 space-y-4 flex flex-col h-full text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Development Cost</p>
                  <p className="text-5xl font-semibold mb-2">$5K</p>
                  <p className="text-sm text-green-600 flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" /> Transparent Pricing
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif mb-2">Affordable</h3>
                  <p className="text-gray-600">
                    High-quality solutions for startups and enterprises alike.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f5f7f9] flex flex-col">
              <CardContent className="p-6 space-y-4 flex flex-col h-full text-center">
                <div className="bg-white rounded-lg p-4 py-8 shadow-sm flex items-center justify-center">
                  <QrCode className="w-16 h-16" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif mb-2">Fast & Reliable</h3>
                  <p className="text-gray-600">
                    Turn your idea into a reality with our streamlined processes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f9f5f7] flex flex-col">
              <CardContent className="p-6 space-y-4 flex flex-col h-full text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Expert Team</span>
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">End-to-End Support</span>
                    <span className="text-green-600 text-sm flex items-center gap-1">
                      <Check className="w-4 h-4" /> Guaranteed
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Flexibility</span>
                    <span className="text-xs text-gray-400">100%</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif mb-2">Comprehensive</h3>
                  <p className="text-gray-600">
                    From ideation to execution, we are with you every step.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="space-y-2 mb-6 text-center w-full">
            <p className="text-sm text-gray-600">Get started today</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight">
              Let&apos;s turn your idea
              <br />
              into reality
            </h2>
          </div>
          <div className="max-w-2xl w-full space-y-8 text-center">
            <p className="text-xl text-gray-600">Book a demo to discuss your MVP needs</p>
            <div className="flex justify-center">
              <Button className="h-12 px-8 bg-zinc-900 hover:bg-zinc-800 gap-2">
                Book a demo
                <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded text-sm">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
