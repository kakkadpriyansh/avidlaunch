"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Target date: 28/09/25
    const targetDate = new Date(2025, 8, 28, 0, 0, 0) // Month is 0-indexed, so 8 = September

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex justify-center gap-4 md:gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center min-w-[80px] md:min-w-[120px] border border-white/20">
            <div className="text-3xl md:text-5xl font-bold text-white font-mono bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent">00</div>
            <div className="text-sm md:text-base text-white/70 uppercase tracking-wider font-medium mt-2">
              {["Days", "Hours", "Mins", "Secs"][i]}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ]

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center min-w-[80px] md:min-w-[120px] border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <motion.div
            key={unit.value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white font-mono bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            {unit.value.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-sm md:text-base text-white/70 uppercase tracking-wider font-medium mt-2">{unit.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
