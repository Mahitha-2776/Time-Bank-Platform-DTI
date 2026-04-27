'use client'

import { Bell, Clock, User as UserIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8 shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">TimeBank</h1>
      </div>

      {/* Right: Time balance, notifications, user */}
      <div className="flex items-center gap-6">
        {/* Time Balance */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50">
          <Clock className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-gray-700">⏱ 12.5 hrs</span>
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
        </div>

        {/* User Avatar */}
        <Avatar className="w-10 h-10 cursor-pointer border-2 border-gray-200 hover:border-green-600 transition-colors">
          <AvatarFallback className="bg-green-100 text-green-700 font-bold">JO</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
