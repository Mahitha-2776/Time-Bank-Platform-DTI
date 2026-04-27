'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/timebank/navbar'
import Sidebar from '@/components/timebank/sidebar'
import MainContent from '@/components/timebank/main-content'
import RightPanel from '@/components/timebank/right-panel'
import PostListingModal from '@/components/timebank/post-listing-modal'
import Toast from '@/components/timebank/toast'

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [showPostModal, setShowPostModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <MainContent
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onPostListing={() => setShowPostModal(true)}
        />

        <RightPanel />
      </div>

      {showPostModal && (
        <PostListingModal
          onClose={() => setShowPostModal(false)}
          onSubmit={(listing) => {
            setShowPostModal(false)
            setToast({ message: `${listing.type === 'offer' ? 'Offer' : 'Request'} posted successfully!`, type: 'success' })
            setTimeout(() => setToast(null), 3000)
          }}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}
