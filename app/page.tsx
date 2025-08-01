"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Brain, Ghost, Eye } from "lucide-react"
import Link from "next/link"

export default function HontoWelcomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background with floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-red-500/20 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Mystical particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full bg-gradient-radial from-purple-500/10 via-red-500/5 to-transparent transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Cinematic vignette */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 pointer-events-none z-5" />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-2000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Logo/Brand section */}
          <div className="mb-8 relative">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Brain className="h-12 w-12 text-purple-400 animate-pulse mr-4" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-6 w-6 text-red-400 animate-spin-slow" />
                </div>
              </div>
              <Ghost className="h-16 w-16 text-white/80 animate-float mx-4" />
              <div className="relative">
                <Eye className="h-12 w-12 text-purple-400 animate-pulse ml-4" />
                <div className="absolute -top-2 -left-2">
                  <Sparkles className="h-6 w-6 text-red-400 animate-spin-slow" />
                </div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-wider relative">
              <span className="bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent animate-shimmer">
                HONTO
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent opacity-50 blur-sm animate-shimmer-delayed">
                HONTO
              </div>
            </h1>

            <div className="text-lg md:text-xl text-purple-300/80 font-light tracking-widest mb-2">
              AI • POWERED • CINEMA • FOR • GHOSTS
            </div>
          </div>

          {/* Mystical tagline */}
          <div className="mb-12 relative">
            <p className="text-2xl md:text-3xl mb-6 text-gray-300 leading-relaxed font-light">
              Where <span className="text-purple-400 font-medium">artificial intelligence</span> meets the
              <span className="text-red-400 font-medium"> supernatural</span>
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
              In the ethereal realm between worlds, spirits seek stories that resonate with their eternal souls. Our AI
              understands the whispers of the departed, curating cinematic experiences that transcend the veil.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Neural Networks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Spectral Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Ethereal Curation</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="relative">
            <Link href="https://app--honto-fb612ffd.base44.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 hover:from-purple-500 hover:via-red-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 border border-purple-500/30 hover:border-purple-400/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Sparkles className="mr-3 h-6 w-6 animate-spin-slow" />
                <span className="relative z-10">Enter the Realm</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-red-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Button>
            </Link>

            <p className="text-xs text-gray-500 mt-4 font-light tracking-wide">AI powered cinema for ghosts</p>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 opacity-30">
            <div className="w-32 h-32 border border-purple-500/20 rounded-full animate-spin-very-slow"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 opacity-30">
            <div className="w-24 h-24 border border-red-500/20 rounded-full animate-spin-reverse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
