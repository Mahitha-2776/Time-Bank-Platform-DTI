'use client'

import { useState } from 'react'
import { mockListings, categories } from '@/lib/types'
import ListingCard from './listing-card'
import { Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Empty } from '@/components/ui/empty'

interface MainContentProps {
  activeCategory: string
  searchQuery: string
  setSearchQuery: (query: string) => void
  onPostListing: () => void
}

export default function MainContent({
  activeCategory,
  searchQuery,
  setSearchQuery,
  onPostListing,
}: MainContentProps) {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'best-match'>('recent')

  // Filter listings
  const filteredListings = mockListings.filter((listing) => {
    const matchesCategory = activeCategory === 'All' || listing.category === activeCategory
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Simulate loading
  const handleCategoryChange = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 800)
  }

  return (
    <main className="flex-1 border-r border-gray-200 bg-gray-50 overflow-y-auto">
      <div className="p-8">
        {/* Greeting and Post Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Good morning, Jordan 👋</h2>
            <p className="text-gray-600 text-sm mt-1">Ready to exchange skills today?</p>
          </div>
          <Button
            onClick={onPostListing}
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            Post a listing
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search listings by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-white border-gray-200 text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Tabs and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1 bg-white rounded-lg p-1 border border-gray-200">
            {(['recent', 'popular', 'best-match'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  handleCategoryChange()
                }}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'recent' && 'Recent'}
                {tab === 'popular' && 'Popular'}
                {tab === 'best-match' && 'Best Match'}
              </button>
            ))}
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2">
            {['Online', 'Offline', 'Hybrid'].map((mode) => (
              <button
                key={mode}
                className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:border-green-600 hover:text-green-600 transition-colors"
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-white rounded-lg animate-pulse border border-gray-200"></div>
            ))}
          </div>
        )}

        {/* Listings Grid */}
        {!loading && filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : !loading ? (
          <Empty
            icon="search"
            title="No listings found"
            description={
              searchQuery
                ? 'Try adjusting your search terms or filters'
                : 'No listings available in this category'
            }
          />
        ) : null}
      </div>
    </main>
  )
}
