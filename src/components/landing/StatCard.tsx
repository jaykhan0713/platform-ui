"use client"

import { useEffect, useState } from "react"

export interface StatCardProps {
  name: string // used as key
  start: number
  end: number
  label: string
  prefix?: string
  suffix?: string
}

export function StatCard({ end, start, label, prefix, suffix }: StatCardProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const duration = 1500 //ms
    const ticks = duration / 16 // ~94 ticks at 60fps
    const direction = start <= end ? 1 : -1
    const step = (direction == 1 ? end - start : start - end) / ticks
    //push
    const interval = setInterval(() => {
      setCount((prev) => {
        if (direction == 1 && prev >= end) {
          clearInterval(interval)
          return end
        } else if (direction == -1 && prev <= end) {
          clearInterval(interval)
          return end
        }

        return prev + step * direction
      })

      //increment/decrement count
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-[28px] font-bold text-[#E8E6E0] tracking-tight">
        {`${prefix ?? ""}${count == end ? count : Math.round(count)}${suffix ?? ""}`}
      </span>
      <span className="text-xs uppercase tracking-[0.5px] text-[#E8E6E0]/40 leading-none">
        {label}
      </span>
    </div>
  )
}
