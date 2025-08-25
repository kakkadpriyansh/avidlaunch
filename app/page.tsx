"use client"

import type React from "react"

import { motion } from "framer-motion"
import Countdown from "@/components/Countdown"
import SocialLinks from "@/components/SocialLinks"
import Image from "next/image"

export default function ComingSoonPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/mountain-landscape-adventure-nature-scenic-view.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-purple-900/80" />



      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're launching on <span className="text-cyan-400 font-semibold">22nd of next month</span>
              <br />
              The ultimate platform for extraordinary travel experiences
            </p>
          </motion.div>



          {/* Countdown Timer */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Countdown />
          </motion.div>
        </div>
      </div>





      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image 
                src="/Avid Red Black.png" 
                alt="Avid Explorers Logo" 
                width={32} 
                height={32} 
                className="object-contain" 
              />
              <span className="text-white font-semibold text-lg">Avid Explorers</span>
            </div>
            <div className="flex justify-center items-center gap-6 mx-auto md:mx-0">
              <SocialLinks />
            </div>
            <p className="text-white/60 text-sm">
                © 2025 Avid Explorers Pvt. Ltd.
              </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
