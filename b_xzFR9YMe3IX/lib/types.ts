export type ListingType = 'offer' | 'request'
export type ServiceMode = 'online' | 'offline' | 'hybrid'

export interface User {
  id: string
  name: string
  avatar: string
  rating: number
  reviews: number
  balance: number
}

export interface Listing {
  id: string
  type: ListingType
  user: User
  title: string
  description: string
  category: string
  mode: ServiceMode
  hours: number
  isRated?: boolean
  rating?: number
  comment?: string
}

export interface Activity {
  id: string
  type: 'given' | 'received' | 'pending'
  listing: Listing
  time: string
  isCompleted: boolean
}

export interface Review {
  id: string
  reviewer: User
  rating: number
  comment: string
  date: string
}

// Mock data
const users: { [key: string]: User } = {
  user1: {
    id: 'user1',
    name: 'Jordan',
    avatar: 'J',
    rating: 4.8,
    reviews: 24,
    balance: 12.5,
  },
  user2: {
    id: 'user2',
    name: 'Alex',
    avatar: 'A',
    rating: 4.9,
    reviews: 18,
    balance: 8.0,
  },
  user3: {
    id: 'user3',
    name: 'Sam',
    avatar: 'S',
    rating: 4.6,
    reviews: 15,
    balance: 15.5,
  },
  user4: {
    id: 'user4',
    name: 'Taylor',
    avatar: 'T',
    rating: 5.0,
    reviews: 32,
    balance: 20.0,
  },
  user5: {
    id: 'user5',
    name: 'Morgan',
    avatar: 'M',
    rating: 4.7,
    reviews: 21,
    balance: 11.0,
  },
}

export const mockListings: Listing[] = [
  {
    id: '1',
    type: 'offer',
    user: users.user2,
    title: 'Python Tutoring',
    description: 'Learn Python basics, data structures, and object-oriented programming. Perfect for beginners!',
    category: 'Tech',
    mode: 'online',
    hours: 2,
  },
  {
    id: '2',
    type: 'request',
    user: users.user3,
    title: 'Logo Design',
    description: 'Need a modern logo for my startup. Should be versatile and work on different backgrounds.',
    category: 'Design',
    mode: 'hybrid',
    hours: 3,
  },
  {
    id: '3',
    type: 'offer',
    user: users.user4,
    title: 'Yoga Sessions',
    description: 'Beginner-friendly yoga classes. Improve flexibility and reduce stress. 60-minute sessions.',
    category: 'Wellness',
    mode: 'offline',
    hours: 1,
  },
  {
    id: '4',
    type: 'offer',
    user: users.user5,
    title: 'Resume Review & Coaching',
    description: 'Professional CV review with personalized feedback and interview prep tips. 1-on-1 sessions.',
    category: 'Teaching',
    mode: 'online',
    hours: 1.5,
  },
  {
    id: '5',
    type: 'request',
    user: users.user2,
    title: 'Web Design Consultation',
    description: 'Need advice on redesigning our website. Looking for UI/UX expertise.',
    category: 'Design',
    mode: 'online',
    hours: 2,
  },
  {
    id: '6',
    type: 'offer',
    user: users.user3,
    title: 'Guitar Lessons',
    description: 'Learn guitar from basics to intermediate level. All ages welcome.',
    category: 'Teaching',
    mode: 'offline',
    hours: 1,
  },
  {
    id: '7',
    type: 'request',
    user: users.user4,
    title: 'Spanish Conversation Practice',
    description: 'Looking for native or fluent Spanish speakers for weekly conversation sessions.',
    category: 'Teaching',
    mode: 'online',
    hours: 1,
  },
  {
    id: '8',
    type: 'offer',
    user: users.user1,
    title: 'React & Web Development',
    description: 'Full-stack web development. Learn React, Node.js, and modern web practices.',
    category: 'Tech',
    mode: 'online',
    hours: 2.5,
  },
]

export const mockActivities: Activity[] = [
  {
    id: 'a1',
    type: 'given',
    listing: mockListings[0],
    time: '2 hours ago',
    isCompleted: true,
  },
  {
    id: 'a2',
    type: 'received',
    listing: mockListings[1],
    time: '5 hours ago',
    isCompleted: true,
  },
  {
    id: 'a3',
    type: 'pending',
    listing: mockListings[2],
    time: '1 day ago',
    isCompleted: false,
  },
  {
    id: 'a4',
    type: 'given',
    listing: mockListings[3],
    time: '2 days ago',
    isCompleted: true,
  },
]

export const mockReviews: Review[] = [
  {
    id: 'r1',
    reviewer: users.user2,
    rating: 5,
    comment: 'Excellent tutor! Very patient and clear explanations.',
    date: '1 week ago',
  },
  {
    id: 'r2',
    reviewer: users.user3,
    rating: 4,
    comment: 'Great service, very professional.',
    date: '2 weeks ago',
  },
  {
    id: 'r3',
    reviewer: users.user4,
    rating: 5,
    comment: 'Highly recommend! Delivered exactly what was promised.',
    date: '3 weeks ago',
  },
]

export const categories = ['All', 'Tech', 'Design', 'Teaching', 'Wellness']
