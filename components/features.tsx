"use client"

import { motion } from "framer-motion"
import { LineChart, Shield, Target, Users } from 'lucide-react'

const features = [
  {
    name: "Expert Analysis",
    description: "Our team of experts provides in-depth market analysis and research to help you make informed investment decisions.",
    icon: LineChart,
  },
  {
    name: "Secure Investment",
    description: "Your investments are protected by state-of-the-art security measures and regulatory compliance.",
    icon: Shield,
  },
  {
    name: "Goal-Based Planning",
    description: "Customize your investment strategy based on your financial goals and risk tolerance.",
    icon: Target,
  },
  {
    name: "Dedicated Support",
    description: "Get personalized support from our team of financial advisors whenever you need it.",
    icon: Users,
  },
]

export function Features() {
  return (
    <div className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base text-[#66D9FF] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart Wealth Management
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the future of wealth management with our comprehensive suite of features.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#9EFF00] text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

