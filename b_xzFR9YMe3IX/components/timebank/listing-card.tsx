'use client'

import { useState } from 'react'
import { Listing, ListingType } from '@/lib/types'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const [isRating, setIsRating] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const isOffer = listing.type === 'offer'

  const handleSubmitRating = () => {
    if (rating > 0) {
      setIsRating(false)
      setRating(0)
      setComment('')
    }
  }

  const getModeColor = (mode: string) => {
    if (mode === 'online') return 'bg-blue-100 text-blue-700'
    if (mode === 'offline') return 'bg-purple-100 text-purple-700'
    return 'bg-green-100 text-green-700'
  }

  return (
    <div
      className={`rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden ${
        isOffer
          ? 'bg-gradient-to-br from-green-50 to-white border-green-200 hover:border-green-400'
          : 'bg-gradient-to-br from-amber-50 to-white border-amber-200 hover:border-amber-400'
      }`}
    >
      <div className="p-6">
        {/* Type Badge */}
        <div className="mb-4 inline-block">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              isOffer
                ? 'bg-green-600 text-white'
                : 'bg-amber-600 text-white'
            }`}
          >
            {isOffer ? 'OFFER' : 'REQUEST'}
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className={isOffer ? 'bg-green-200 text-green-700' : 'bg-amber-200 text-amber-700'}>
              {listing.user.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <h3 className="font-bold text-gray-900">{listing.user.name}</h3>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(listing.user.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-600">{listing.user.reviews} reviews</p>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 mb-2">{listing.title}</h4>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{listing.description}</p>

        {/* Category and Mode */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
            {listing.category}
          </span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getModeColor(listing.mode)}`}>
            {listing.mode.charAt(0).toUpperCase() + listing.mode.slice(1)}
          </span>
        </div>

        {/* Hours Cost */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{listing.hours}</span>
            <span className="text-sm text-gray-600">hours</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-sm h-9">
            Connect
          </Button>
        </div>

        {/* Rating Section - Completed Services Only */}
        {!isRating && listing.isRated ? (
          <div className="mt-4 pt-4 border-t border-gray-200 bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
            <div className="flex items-start gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < (listing.rating || 0)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{listing.rating} stars</p>
                <p className="text-xs text-gray-600 mt-1">&quot;{listing.comment}&quot;</p>
              </div>
            </div>
          </div>
        ) : !isRating && listing.isCompleted ? (
          <button
            onClick={() => setIsRating(true)}
            className="mt-4 w-full pt-4 border-t border-gray-200 text-center text-sm font-semibold text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors py-2"
          >
            ⭐ Rate this exchange
          </button>
        ) : isRating ? (
          <div className="mt-4 pt-4 border-t border-gray-200 bg-green-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg space-y-3">
            <p className="text-sm font-semibold text-gray-900">Rate your experience</p>

            {/* Star Rating */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= (hoverRating || rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Comment */}
            <textarea
              placeholder="Share your feedback (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={100}
              className="w-full text-sm p-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-green-600"
              rows={2}
            />

            {/* Submit Button */}
            <div className="flex gap-2">
              <Button
                onClick={handleSubmitRating}
                disabled={rating === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm h-9 disabled:opacity-50"
              >
                Submit Rating
              </Button>
              <Button
                onClick={() => setIsRating(false)}
                variant="outline"
                className="flex-1 text-sm h-9"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
