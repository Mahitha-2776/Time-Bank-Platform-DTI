'use client'

import { useState } from 'react'
import { categories } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'

interface PostListingModalProps {
  onClose: () => void
  onSubmit: (listing: { type: 'offer' | 'request'; title: string; description: string; category: string; hours: number }) => void
}

export default function PostListingModal({ onClose, onSubmit }: PostListingModalProps) {
  const [type, setType] = useState<'offer' | 'request'>('offer')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Tech')
  const [hours, setHours] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const newErrors: { [key: string]: string } = {}

    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required'
    }
    if (!hours || parseFloat(hours) <= 0) {
      newErrors.hours = 'Hours must be greater than 0'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit({
      type,
      title: title.trim(),
      description: description.trim(),
      category,
      hours: parseFloat(hours),
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Post a New Listing</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              What would you like to do?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {(['offer', 'request'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    type === t
                      ? t === 'offer'
                        ? 'border-green-600 bg-green-50'
                        : 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{t === 'offer' ? '🎁' : '📋'}</div>
                  <p className="font-semibold text-gray-900">
                    {t === 'offer' ? 'Offer a Service' : 'Request a Service'}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {t === 'offer' ? 'I want to provide' : 'I need someone to'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Title *
            </label>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (errors.title) setErrors({ ...errors, title: '' })
              }}
              placeholder="e.g., Python Tutoring, Logo Design"
              className={`${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
                if (errors.description) setErrors({ ...errors, description: '' })
              }}
              placeholder="Tell people more about what you're offering or requesting..."
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-600 resize-none ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.description && (
              <p className="text-sm text-red-600 mt-1">{errors.description}</p>
            )}
          </div>

          {/* Category and Hours */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              >
                {categories.filter((c) => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Hours Required *
              </label>
              <Input
                type="number"
                step="0.5"
                min="0.5"
                value={hours}
                onChange={(e) => {
                  setHours(e.target.value)
                  if (errors.hours) setErrors({ ...errors, hours: '' })
                }}
                placeholder="e.g., 2"
                className={`${errors.hours ? 'border-red-500' : ''}`}
              />
              {errors.hours && <p className="text-sm text-red-600 mt-1">{errors.hours}</p>}
            </div>
          </div>

          {/* Mode Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Service Mode
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['online', 'offline', 'hybrid'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className="p-3 border-2 border-gray-200 rounded-lg hover:border-green-600 transition-colors text-sm font-medium text-gray-900 hover:bg-green-50"
                >
                  {mode === 'online' && '💻 Online'}
                  {mode === 'offline' && '📍 Offline'}
                  {mode === 'hybrid' && '🔄 Hybrid'}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Post Listing
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
