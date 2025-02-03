"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Shield, Target, Users, BarChart2, PieChart } from "lucide-react"

const features = [
  {
    title: "Expert Market Analysis",
    description:
      "Our team of seasoned analysts provide in-depth market insights to help you make informed investment decisions.",
    icon: LineChart,
  },
  {
    title: "Secure Investments",
    description: "Your investments are protected by state-of-the-art security measures and regulatory compliance.",
    icon: Shield,
  },
  {
    title: "Goal-Based Planning",
    description: "Customize your investment strategy based on your financial goals and risk tolerance.",
    icon: Target,
  },
  {
    title: "Dedicated Support",
    description: "Get personalized support from our team of financial advisors whenever you need it.",
    icon: Users,
  },
  {
    title: "Advanced Trading Tools",
    description: "Access cutting-edge trading platforms and tools for optimal performance in the markets.",
    icon: BarChart2,
  },
  {
    title: "Diversified Portfolio Management",
    description: "Benefit from our expertise in managing diversified portfolios across various asset classes.",
    icon: PieChart,
  },
]

export function Body() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the tools and services that set Aadyanvi Wealth apart in the world of trading and investments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-[#AACF45] mb-4" />
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#AACF45] hover:bg-[#08AFF1] transition-colors duration-300"
          >
            Learn More About Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

