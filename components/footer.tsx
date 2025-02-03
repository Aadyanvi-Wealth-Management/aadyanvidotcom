"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-medium text-white">Stay updated with the latest</h3>
            <p className="mt-2 text-gray-400">at Aadyanvi Wealth</p>
          </div>
          <div className="lg:col-span-2">
            <div className="flex gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-[#AACF45] text-gray-900 hover:bg-[#08AFF1] hover:text-white transition-colors">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Who We Are</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Purpose and Values</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Leadership</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Corporate Social Responsibility</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">What We Do</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Asset Management</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Credit Solutions</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Investment Banking</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Institutional Equities</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Wealth Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Careers</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Life at Aadyanvi</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Students and Graduates</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Experienced Professionals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Corporate Disclosures</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Regulatory Information</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Offer Documents</Link></li>
              <li><Link href="#" className="hover:text-[#08AFF1] transition-colors">Track Record</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="mt-8">
              <Image
                src="/logo.png"
                alt="Aadyanvi Wealth"
                width={160}
                height={40}
                className="brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Aadyanvi Wealth. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
              Terms of use
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

