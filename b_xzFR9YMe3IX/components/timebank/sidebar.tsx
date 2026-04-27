'use client'

import { categories } from '@/lib/types'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface SidebarProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const categoryColors: { [key: string]: string } = {
  All: 'bg-gray-400',
  Tech: 'bg-blue-500',
  Design: 'bg-purple-500',
  Teaching: 'bg-orange-500',
  Wellness: 'bg-green-600',
}

const categoryCounts: { [key: string]: number } = {
  All: 8,
  Tech: 2,
  Design: 2,
  Teaching: 2,
  Wellness: 1,
}

export default function Sidebar({ activeCategory, setActiveCategory }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6 flex flex-col h-full">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`}></div>
              <span className="flex-1 text-sm font-medium text-left">{category}</span>
              <span className="text-xs font-semibold text-gray-400">{categoryCounts[category]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* User Profile Card */}
      <div className="mt-auto">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-10 h-10 bg-green-600">
              <AvatarFallback className="bg-green-600 text-white font-bold">JO</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-gray-900">Jordan</p>
              <p className="text-xs text-gray-600">Premium member</p>
            </div>
          </div>
          <div className="bg-white rounded px-3 py-2 text-center">
            <p className="text-xs text-gray-600">Available balance</p>
            <p className="text-lg font-bold text-green-600">12.5 hrs</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
