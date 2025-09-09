import type React from "react"

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">{title}</span>
        </h2>
        {subtitle ? <p className="mt-2 text-zinc-400 max-w-prose leading-relaxed">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
