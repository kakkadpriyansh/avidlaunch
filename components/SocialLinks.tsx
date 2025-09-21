"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Linkedin } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/avidexplorers.in",
    color: "hover:text-pink-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@avidexplorersindia?si=lYLJZpfa_JaAl32S",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/avid-explorers/",
    color: "hover:text-blue-600",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full bg-card text-accent transition-all duration-300 ${social.color} shadow-sm hover:shadow-md`}
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon size={24} />
          </motion.a>
        )
      })}
    </div>
  )
}
