[DOCUMENTATION (1).md](https://github.com/user-attachments/files/27144438/DOCUMENTATION.1.md)[Uploading DOC# 📖 TimeBank — Complete Technical Documentation

> **Live Demo:** https://mahitha-2776.github.io/Time-Bank-Platform-DTI/
> **Tech Stack:** HTML5 · CSS3 · Vanilla JavaScript
> **Type:** Single Page Application (SPA) — No frameworks, no dependencies

---

## 📚 Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [HTML Structure — Full Breakdown](#3-html-structure)
4. [CSS Architecture](#4-css-architecture)
5. [JavaScript Architecture](#5-javascript-architecture)
6. [State Management](#6-state-management)
7. [Data Models](#7-data-models)
8. [All Functions Reference](#8-all-functions-reference)
9. [Event Listeners Reference](#9-event-listeners-reference)
10. [Features In Detail](#10-features-in-detail)
11. [localStorage Usage](#11-localstorage-usage)
12. [Form Validation Logic](#12-form-validation-logic)
13. [Toast Notification System](#13-toast-notification-system)
14. [How to Extend the Project](#14-how-to-extend-the-project)
15. [Known Limitations and Future Improvements](#15-known-limitations-and-future-improvements)

---

## 1. Project Overview

**TimeBank** is a community skill-exchange web platform built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no npm required.

### Core Concept
The TimeBank model replaces money with **time credits**:
- 1 Time Credit = 1 Hour of service
- Members **offer** skills they can provide (e.g., guitar lessons, web tutoring)
- Members **request** help they need (e.g., garden work, math tutoring)
- Every completed exchange earns or spends time credits accordingly

### Design Goals
- Zero dependencies — open `index.html` in any browser and it works
- Fully responsive — works on mobile, tablet, and desktop
- Accessible — semantic HTML, ARIA labels, keyboard navigation (Escape key support)
- Persistent preferences — theme and bookmarks saved to `localStorage`

---

## 2. File Structure

```
Time-Bank-Platform-DTI/
├── index.html          ← Complete app UI (single HTML file)
├── styles.css          ← All styling, themes, animations, responsive design
├── script.js           ← All app logic, state, rendering, events
├── README.md           ← Project overview for GitHub
└── DOCUMENTATION.md    ← This file
```

---

## 3. HTML Structure

The entire app is a **single HTML page** with these major sections:

### 3.1 Head Section
- Responsive viewport meta tag ensures mobile compatibility
- External CSS linked via `<link rel="stylesheet" href="styles.css">`
- JavaScript loaded at bottom of `<body>` via `<script src="script.js">`

### 3.2 Navbar (.navbar)
Three sections — left (logo), center (search), right (actions):
- **Logo** — Clock SVG icon + "TimeBank" brand text
- **Search** — `#searchInput` with live debounced filtering
- **Time Balance** — Shows current user balance (24.5 hrs)
- **Theme Toggle** — `#themeToggle` button with sun/moon SVG icons
- **Notifications** — `#notificationBtn` bell icon with badge (count: 3)
- **User Menu** — `#userAvatar` (DiceBear avatar) triggers `#userDropdown` with Profile, Saved Listings, Settings, Logout links

### 3.3 Main Container (.main-container)
Three-column layout: Left Sidebar | Main Content | Right Panel

**Left Sidebar (.sidebar):**
- Category list with 6 options: All (24), Education (8), Home (6), Tech (5), Creative (3), Wellness (2)
- Type filter buttons: All / Offers / Requests

**Main Content (.main-content):**
- Header with `<h1>Discover Services</h1>` and subtitle
- Sort dropdown (`#sortBtn` + `#sortMenu`) and Post Listing button
- `#loadingState` — skeleton cards shown during 1s simulated load
- `#emptyState` — shown when no results match (with reset filters button)
- `#listingsGrid` — CSS grid of rendered listing cards
- `#loadMoreContainer` — Load More button + "Showing X of Y listings" info

**Right Panel (.right-panel):**
- Balance card — 24.5 hours, Earned: 12 / Spent: 8 / Pending: 3
- Recent Activity feed (`#activityList`)
- Top Contributors leaderboard (`#leaderboardList`)
- Recent Reviews (`#reviewsList`)

### 3.4 Post Listing Modal (#modalOverlay)
Hidden by default. Form fields: Title, Category, Description, Time Credits, Service Mode (Online/In-Person), Location (only shown for In-Person). Contains Cancel and Submit buttons.

### 3.5 Toast Container (#toastContainer)
Fixed-position div at bottom-right. Toast notifications dynamically injected here.

---

## 4. CSS Architecture

### 4.1 CSS Custom Properties (Theme Variables)

All colors defined on `:root`. Dark mode overrides via `[data-theme="dark"]`:

```
--bg-primary        Main page background
--bg-secondary      Cards, panels, sidebars
--bg-tertiary       Hover states, subtle backgrounds
--text-primary      Main readable text
--text-secondary    Muted / subtitle text
--text-muted        Placeholders, timestamps
--accent-color      Brand color — buttons, highlights
--accent-hover      Darker accent for hover states
--border-color      Dividers, card borders
--shadow            Box shadow values
--offer-color       Green — offer badge color
--request-color     Orange — request badge color
```

### 4.2 Layout Strategy

| Component | CSS Technique |
|---|---|
| Navbar | Flexbox, justify-content: space-between |
| 3-column main | CSS Grid: 260px, 1fr, 300px |
| Listing cards grid | CSS Grid: auto-fill, minmax(300px, 1fr) |
| Card internal layout | Flexbox, flex-direction: column |

### 4.3 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| max-width: 1200px | Right panel hidden |
| max-width: 900px | Sidebar stacks above content |
| max-width: 600px | Navbar collapses, font sizes reduce |

### 4.4 Key Animations

| Animation | Used For |
|---|---|
| @keyframes shimmer | Skeleton card loading shine effect |
| @keyframes slideIn | Toast notification entrance |
| transition 0.2s ease | Button and card hover states |
| transition opacity + transform | Modal open/close |
| transition background-color | Dark/light theme switch |

### 4.5 Important CSS Classes

| Class | Purpose |
|---|---|
| .hidden | display: none — toggled by JavaScript |
| .listing-card.offer | Green left border accent |
| .listing-card.request | Orange left border accent |
| .bookmark-btn.active | Filled bookmark icon (saved state) |
| .skeleton-card | Animated shimmer loading placeholder |
| .toast.success / .error / .warning | Colored toast notification variants |
| .service-mode-badge.online | Blue online badge on card |
| .service-mode-badge.in-person | Purple in-person badge on card |

---

## 5. JavaScript Architecture

Everything lives in `script.js` — one file, no modules, no imports.

### File Organization

```
script.js
├── Mock Data          mockListings, mockActivities, mockLeaderboard, mockReviews
├── State Object       Single source of truth for all app state
├── DOM Elements       Cached references to all HTML elements
├── Utility Functions  getAvatarUrl(), debounce()
├── Render Functions   renderListings(), renderListingCard(), etc.
├── Filter Functions   filterListings(), sortListings()
├── Event Handlers     handleSearch(), handleCategoryClick(), etc.
├── Bookmark Functions toggleBookmark(), updateSavedCount()
├── Theme Functions    initTheme(), toggleTheme()
├── Modal Functions    openModal(), closeModal(), handleFormSubmit()
├── Toast Functions    showToast()
├── Event Listeners    initEventListeners()
└── init()             App entry point → called on DOMContentLoaded
```

---

## 6. State Management

All app state lives in a single `state` object — the single source of truth:

```javascript
let state = {
  listings: [...mockListings],         // Full listings array
  filteredListings: [...mockListings], // After filters applied
  selectedCategory: 'all',            // Active category filter
  selectedType: 'all',                // 'all' | 'offer' | 'request'
  searchQuery: '',                    // Current search text
  formType: 'offer',                  // Active type in Post modal
  serviceMode: 'online',              // Active mode in Post modal
  sortBy: 'newest',                   // Active sort option
  bookmarks: [],                      // Bookmarked listing IDs (from localStorage)
  theme: 'light',                     // 'light' | 'dark' (from localStorage)
  itemsPerPage: 6,                    // Listings shown per page
  currentPage: 1                      // Current pagination page
};
```

**State update flow:**
```
User Action → Event Handler → State Update → filterListings() → renderListings() → DOM Update
```

---

## 7. Data Models

### Listing Object
```javascript
{
  id: 1,
  type: 'offer',              // 'offer' | 'request'
  title: 'Guitar Lessons',
  description: 'Learn guitar...',
  category: 'education',      // education | home | tech | creative | wellness
  timeCredits: 2,             // Hours (min 0.5, step 0.5)
  serviceMode: 'in-person',   // 'online' | 'in-person'
  location: 'Vijayawada',     // Empty string if online
  user: {
    name: 'Michael Chen',
    avatar: 'Michael'         // Seed for DiceBear avatar API
  },
  rating: 4.9,
  reviewCount: 24
}
```

### Activity Object
```javascript
{
  type: 'earned',   // 'earned' | 'spent' | 'received'
  text: 'You earned <strong>2 hours</strong> for guitar lessons with John',
  time: '2 hours ago'
}
```

### Leaderboard User Object
```javascript
{
  name: 'Priya Patel',
  hours: 156,       // Total hours contributed
  avatar: 'Priya'
}
```

### Review Object
```javascript
{
  name: 'John D.',
  avatar: 'John',
  rating: 5,
  text: 'Amazing guitar teacher! Very patient and knowledgeable.'
}
```

---

## 8. All Functions Reference

### Utility Functions

| Function | Description |
|---|---|
| `getAvatarUrl(seed)` | Builds DiceBear Avataaars API URL using the seed string |
| `debounce(func, wait)` | Returns a debounced version of `func` that delays execution by `wait` ms |

### Render Functions

| Function | Description |
|---|---|
| `renderListings()` | Master render — handles pagination, empty state, load more button |
| `renderListingCard(listing)` | Returns HTML string for one listing card with bookmark, badges, avatar, stars |
| `renderActivityItem(activity)` | Returns HTML string for one activity feed item with icon |
| `renderLeaderboardItem(user, index)` | Returns HTML string for one leaderboard entry with rank number |
| `renderReviewItem(review)` | Returns HTML string for one review card with stars |
| `renderSidebarContent()` | Renders activity feed, leaderboard, and reviews into right panel |
| `renderStars(rating, interactive)` | Returns HTML of 5 star SVGs, filled/empty based on rating |

### Filter and Sort Functions

| Function | Description |
|---|---|
| `filterListings()` | Applies category + type + search to state.listings, then sorts and renders |
| `sortListings()` | Sorts state.filteredListings in-place based on state.sortBy |
| `resetAllFilters()` | Resets all filters, clears search, resets UI active states |

### Event Handler Functions

| Function | Trigger | Description |
|---|---|---|
| `handleCategoryClick(e)` | Category item click | Updates selectedCategory, toggles active class |
| `handleTypeFilter(e)` | Filter button click | Updates selectedType, toggles active class |
| `handleSearch(e)` | Search input (300ms debounce) | Updates searchQuery, re-filters |
| `handleSortClick()` | Sort button click | Toggles sort menu visibility |
| `handleSortOptionClick(e)` | Sort option click | Updates sortBy, updates label, closes menu |
| `handleTypeButtonClick(e)` | Modal type button | Toggles Offer/Request in Post modal |
| `handleServiceModeClick(e)` | Mode button click | Toggles online/in-person, shows/hides location field |
| `handleFormSubmit(e)` | Form submit | Validates, creates listing, adds to state, shows toast |
| `handleDropdownAction(action)` | Dropdown menu item | Handles profile/favorites/settings/logout with toasts |

### Bookmark Functions

| Function | Description |
|---|---|
| `toggleBookmark(listingId)` | Adds or removes ID from state.bookmarks, saves to localStorage, re-renders |
| `updateSavedCount()` | Updates saved count badge number in user dropdown |

### Theme Functions

| Function | Description |
|---|---|
| `initTheme()` | Reads state.theme, sets data-theme on html element, updates icon |
| `toggleTheme()` | Flips theme, updates data-theme, saves to localStorage |
| `updateThemeToggleIcon()` | Shows sun or moon SVG based on current theme |

### Modal Functions

| Function | Description |
|---|---|
| `openModal()` | Removes hidden from overlay, disables body scroll |
| `closeModal()` | Adds hidden, re-enables scroll, resets form and state |
| `clearFormErrors()` | Clears all error messages and error classes from inputs |
| `validateForm(formData)` | Validates all required fields, returns true/false |

### Toast and Pagination Functions

| Function | Description |
|---|---|
| `showToast(type, title, message)` | Creates toast, appends to container, auto-removes after 4s |
| `loadMore()` | Increments currentPage, re-renders listings |

### Initialization

| Function | Description |
|---|---|
| `init()` | Entry point: sets theme, shows skeleton for 1s, renders content, attaches events |
| `initEventListeners()` | Attaches all event listeners to DOM elements |

---

## 9. Event Listeners Reference

| Element | Event | Handler |
|---|---|---|
| #searchInput | input | debounce(handleSearch, 300) |
| .category-item (each) | click | handleCategoryClick |
| .filter-btn (each) | click | handleTypeFilter |
| #resetFilters | click | resetAllFilters |
| #postListingBtn | click | openModal |
| #closeModal | click | closeModal |
| #cancelBtn | click | closeModal |
| #modalOverlay | click | closeModal (only if target is overlay) |
| .type-btn (each) | click | handleTypeButtonClick |
| .mode-btn (each) | click | handleServiceModeClick |
| #listingForm | submit | handleFormSubmit |
| document | keydown | Close modal/dropdowns on Escape key |
| #listingsGrid | click | Event delegation: bookmark + star rating |
| #themeToggle | click | toggleTheme |
| #userAvatar | click | toggleUserDropdown |
| document | click | closeUserDropdown (click outside) |
| #profileLink | click | handleDropdownAction('profile') |
| #favoritesLink | click | handleDropdownAction('favorites') |
| #settingsLink | click | handleDropdownAction('settings') |
| #logoutLink | click | handleDropdownAction('logout') |
| #sortBtn | click | handleSortClick |
| .sort-option (each) | click | handleSortOptionClick |
| document | click | Close sort menu when clicking outside |
| #loadMoreBtn | click | loadMore |

---

## 10. Features In Detail

### 10.1 Search
- Real-time with 300ms debounce — avoids excessive re-renders on every keystroke
- Searches: listing.title and listing.description (case-insensitive)
- Combined with active category and type filters simultaneously
- Resets pagination to page 1 when search changes

### 10.2 Sorting Options

| Option | Sort Key | Direction |
|---|---|---|
| Newest First | listing.id | Descending |
| Oldest First | listing.id | Ascending |
| Most Time Credits | listing.timeCredits | Descending |
| Least Time Credits | listing.timeCredits | Ascending |
| Highest Rated | listing.rating | Descending |

### 10.3 Pagination (Load More)
- Default: 6 listings per page (state.itemsPerPage)
- Uses `state.filteredListings.slice(0, currentPage * itemsPerPage)`
- Load More increments currentPage and re-renders
- Button hides when all listings are visible
- Info text: "Showing X of Y listings"
- currentPage resets to 1 on every filter change

### 10.4 Bookmarks
- Event delegation on #listingsGrid detects .bookmark-btn clicks
- toggleBookmark() pushes or splices listing ID from state.bookmarks array
- Saved to localStorage as JSON: `timebank_bookmarks`
- Saved count badge shown in user dropdown, hidden if count is 0

### 10.5 Post a Listing — Full Flow
1. User clicks Post Listing button → openModal()
2. Selects Offer or Request
3. Fills Title, Category, Description, Time Credits
4. Selects Online or In-Person
5. If In-Person: location field appears, city required
6. Submit → validateForm() runs
7. If valid: new listing object created with Date.now() as ID
8. Pushed to front of state.listings with unshift()
9. filterListings() re-renders — new listing appears at top
10. Modal closes, success toast shown

### 10.6 Dark Mode
- Toggling sets `document.documentElement.setAttribute('data-theme', 'dark')`
- CSS variable overrides apply via `[data-theme="dark"]` selector
- Preference saved to localStorage as `timebank_theme`
- initTheme() loads saved preference on every page load

### 10.7 Avatar System
- Uses DiceBear Avataaars API v7 (free, no API key needed)
- URL: `https://api.dicebear.com/7.x/avataaars/svg?seed=NAME`
- Same seed always generates same avatar — consistent per user
- Used in: listing cards, leaderboard, reviews, user menu

### 10.8 Skeleton Loading
- 6 .skeleton-card divs shown during 1 second simulated fetch
- CSS shimmer animation (@keyframes) sweeps across cards
- After 1s timeout: skeleton hidden, real cards rendered

### 10.9 Toast Notifications

| Type | Color | Icon | Used When |
|---|---|---|---|
| success | Green | Checkmark | Listing posted, bookmarked, theme changed |
| error | Red | X circle | Validation failures |
| warning | Orange | Triangle | No saved items |

Auto-dismiss: 4 seconds. Reverse slide animation on exit. Manual close via X button.

---

## 11. localStorage Usage

| Key | Value Type | Purpose |
|---|---|---|
| timebank_bookmarks | JSON array of numbers | Persists saved listing IDs across sessions |
| timebank_theme | String: 'light' or 'dark' | Persists user theme preference |

```javascript
// Reading on startup
state.bookmarks = JSON.parse(localStorage.getItem('timebank_bookmarks') || '[]');
state.theme = localStorage.getItem('timebank_theme') || 'light';

// Writing on change
localStorage.setItem('timebank_bookmarks', JSON.stringify(state.bookmarks));
localStorage.setItem('timebank_theme', state.theme);
```

---

## 12. Form Validation Logic

Validated on submit, errors shown inline below each field:

| Field | Validation Rule |
|---|---|
| Title | Must not be empty (after trim) |
| Category | Must have a selected option |
| Description | Must not be empty (after trim) |
| Time Credits | Must be a number greater than 0 |
| Location | Required only when serviceMode is 'in-person' |

`clearFormErrors()` runs first to remove any previous error messages before re-validating.

---

## 13. Toast Notification System

```javascript
// Usage
showToast('success', 'Listing Posted!', 'Your offer has been published.');
showToast('error', 'Error', 'Something went wrong.');
showToast('warning', 'No Saved Items', 'You have not saved any listings yet.');
```

Internal behavior:
- Creates a `<div class="toast TYPE">` element dynamically
- Injects icon SVG + title + message + close button HTML
- Appends to `#toastContainer`
- Close button removes the toast immediately
- Auto-removes after 4000ms with reverse slide animation

---

## 14. How to Extend the Project

### Add a new category
1. Add a new `<li class="category-item" data-category="newcat">` in the sidebar in index.html
2. Add `<option value="newcat">New Category</option>` in the Post modal select
3. Add listings with `category: 'newcat'` in mockListings in script.js

### Add a new sort option
1. Add `<button class="sort-option" data-sort="newSort">Label</button>` in index.html
2. Add `case 'newSort': state.filteredListings.sort(...); break;` in sortListings()
3. Add `'newSort': 'Label'` to the labelMap in handleSortOptionClick()

### Connect to a real backend
```javascript
async function loadListings() {
  const res = await fetch('https://your-api.com/api/listings');
  const data = await res.json();
  state.listings = data;
  state.filteredListings = [...data];
  filterListings();
}
// Call loadListings() inside init() instead of using mockListings
```

### Add real user authentication
1. Build a login form/modal with email + password
2. Call your auth API and store the JWT token in localStorage as `timebank_token`
3. Replace hardcoded `Sarah Thompson` user with the authenticated user's data

### Add a new page/section (SPA routing)
```javascript
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
}
// Example: showView('profilePage'), showView('mainFeed')
```

### Add real-time updates (WebSocket)
```javascript
const ws = new WebSocket('wss://your-api.com/ws');
ws.onmessage = (event) => {
  const newListing = JSON.parse(event.data);
  state.listings.unshift(newListing);
  filterListings();
  showToast('success', 'New Listing!', `${newListing.user.name} just posted.`);
};
```

---

## 15. Known Limitations and Future Improvements

### Current Limitations
- Mock data only — no real backend, all listing data resets on page refresh
- No real authentication — user is hardcoded as Sarah Thompson
- No real time credit system — balance is static (24.5 hrs), not calculated
- Notifications are static — bell always shows count of 3, no real list
- Profile, Settings pages show "coming soon" toast

### Suggested Future Improvements
- Connect to REST API (Node.js + Express + MongoDB, or Firebase Firestore)
- Add real user authentication (Firebase Auth or JWT-based)
- Build a messaging system between offer and request parties
- Add real transaction history with credit calculations
- Add image upload for listing photos
- Add geolocation-based filtering for in-person services
- Add email notifications for booking requests
- Add PWA support (service worker + web manifest) for offline use and installability
- Add search by tags in addition to title and description

---

_Documentation written for TimeBank v1.0.0 — April 2026_

_Live Demo: https://mahitha-2776.github.io/Time-Bank-Platform-DTI/_
UMENTATION (1).md…]()
