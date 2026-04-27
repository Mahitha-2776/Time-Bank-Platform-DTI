'use client'

import { useState } from 'react'
import { mockActivities, mockReviews } from '@/lib/types'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Star, TrendingUp } from 'lucide-react'

export default function RightPanel() {
  const [selectedTab, setSelectedTab] = useState<'activity' | 'leaderboard' | 'reviews'>('activity')

  const givenHours = 8.5
  const receivedHours = 4
  const totalAvailable = 12.5

  return (
    <aside className="w-72 bg-white border-l border-gray-200 p-6 overflow-y-auto flex flex-col gap-6">
      {/* Time Balance Card */}
      <div className="rounded-lg bg-gradient-to-br from-green-600 to-green-700 text-white p-6">
        <p className="text-sm font-semibold opacity-90 mb-2">Total Available</p>
        <div className="text-4xl font-bold mb-6">{totalAvailable}h</div>

        {/* Progress */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Given</span>
              <span className="font-semibold">{givenHours}h</span>
            </div>
            <Progress value={(givenHours / totalAvailable) * 100} className="h-2 bg-green-500" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Received</span>
              <span className="font-semibold">{receivedHours}h</span>
            </div>
            <Progress value={(receivedHours / totalAvailable) * 100} className="h-2 bg-green-500" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
        {(['activity', 'leaderboard', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-1 px-3 py-2 rounded text-xs font-semibold transition-colors ${
              selectedTab === tab
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab === 'activity' && 'Activity'}
            {tab === 'leaderboard' && 'Top Users'}
            {tab === 'reviews' && 'Reviews'}
          </button>
        ))}
      </div>

      {/* Activity Feed */}
      {selectedTab === 'activity' && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-900">Recent Exchanges</h3>
          {mockActivities.map((activity) => {
            const bgColor = {
              given: 'bg-green-50 border-green-200',
              received: 'bg-blue-50 border-blue-200',
              pending: 'bg-amber-50 border-amber-200',
            }[activity.type]

            const dotColor = {
              given: 'bg-green-600',
              received: 'bg-blue-600',
              pending: 'bg-amber-600',
            }[activity.type]

            return (
              <div key={activity.id} className={`rounded-lg border p-3 ${bgColor}`}>
                <div className="flex gap-3">
                  <div className={`w-3 h-3 rounded-full ${dotColor} mt-1 flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {activity.type === 'given' && 'Gave: '}
                      {activity.type === 'received' && 'Received: '}
                      {activity.type === 'pending' && 'Pending: '}
                      {activity.listing.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Leaderboard */}
      {selectedTab === 'leaderboard' && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-900">Top Contributors</h3>
          {[
            { name: 'Taylor', avatar: 'T', hours: 20, rating: 5 },
            { name: 'Alex', avatar: 'A', hours: 18, rating: 4.9 },
            { name: 'Jordan', avatar: 'J', hours: 12.5, rating: 4.8 },
            { name: 'Morgan', avatar: 'M', hours: 11, rating: 4.7 },
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-xs font-bold text-gray-500 w-5 text-center">{i + 1}</span>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-bold">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 ${
                        j < Math.floor(user.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs font-bold text-green-600">{user.hours}h</span>
            </div>
          ))}
        </div>
      )}

      {/* Reviews */}
      {selectedTab === 'reviews' && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-900">My Reviews</h3>
          {mockReviews.map((review) => (
            <div key={review.id} className="rounded-lg border border-gray-200 bg-white p-3 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                    {review.reviewer.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{review.reviewer.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              <p className="text-xs text-gray-700 italic">&quot;{review.comment}&quot;</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}
