"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Comet-style subtle starfield + glow, using only neutrals + indigo/cyan accents
export default function HeroBG({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const dpr = Math.min(2, window.devicePixelRatio || 1)

    function resize() {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    resize()
    const onResize = () => resize()
    window.addEventListener("resize", onResize)

    // Create stars
    const stars = Array.from({ length: 140 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 0.9 + 0.1,
      s: Math.random() * 0.6 + 0.4,
    }))

    function draw() {
      if (!ctx) return
      const { width, height } = canvas

      // Background vignette
      ctx.clearRect(0, 0, width, height)
      const grad = ctx.createLinearGradient(0, 0, 0, height)
      grad.addColorStop(0, "rgba(0,0,0,1)")
      grad.addColorStop(1, "rgba(0,0,0,1)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Radial glows (indigo/cyan)
      const g1 = ctx.createRadialGradient(width * 0.5, height * 0.1, 0, width * 0.5, height * 0.1, width * 0.6)
      g1.addColorStop(0, "rgba(99,102,241,0.25)") // indigo-500
      g1.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g1
      ctx.beginPath()
      ctx.arc(width * 0.5, height * 0.1, width * 0.6, 0, Math.PI * 2)
      ctx.fill()

      const g2 = ctx.createRadialGradient(width * 0.5, height * 0.95, 0, width * 0.5, height * 0.95, width * 0.7)
      g2.addColorStop(0, "rgba(34,211,238,0.18)") // cyan-400
      g2.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g2
      ctx.beginPath()
      ctx.arc(width * 0.5, height * 0.95, width * 0.7, 0, Math.PI * 2)
      ctx.fill()

      // Starfield
      for (const star of stars) {
        const x = star.x * width
        const y = star.y * height
        const flicker = 0.7 + Math.sin((Date.now() * 0.001 + star.x * 10) * star.s) * 0.3
        ctx.globalAlpha = 0.35 * flicker
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(x, y, star.r * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black" />
    </div>
  )
}
