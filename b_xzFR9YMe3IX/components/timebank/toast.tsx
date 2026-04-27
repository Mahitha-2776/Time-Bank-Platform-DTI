'use client'

import { CheckCircle, AlertCircle } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
}

export default function Toast({ message, type }: ToastProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-right-5 fade-in">
      <div
        className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg text-white ${
          type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
        )}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  )
}
