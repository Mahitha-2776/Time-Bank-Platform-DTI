# 📖 TimeBank — Complete Project Documentation

> **Live Demo:** https://mahitha-2776.github.io/Time-Bank-Platform-DTI/
> **Tech Stack:** HTML5 · CSS3 · Vanilla JavaScript
> **Type:** Single Page Application (SPA)

---

## 📚 Table of Contents

1. [Project Introduction](#1-project-introduction)
2. [Problem Statement](#2-problem-statement)
3. [Objectives](#3-objectives)
4. [Features](#4-features)
5. [User Interface Overview](#5-user-interface-overview)
6. [How to Use the App](#6-how-to-use-the-app)
7. [File Structure](#7-file-structure)
8. [Technology Stack](#8-technology-stack)
9. [Technical Documentation](#9-technical-documentation)
10. [State Management](#10-state-management)
11. [Data Models](#11-data-models)
12. [All Functions Reference](#12-all-functions-reference)
13. [Form Validation](#13-form-validation)
14. [localStorage Usage](#14-localstorage-usage)
15. [Responsive Design](#15-responsive-design)
16. [Future Improvements](#16-future-improvements)
17. [Challenges Faced](#17-challenges-faced)
18. [Learnings](#18-learnings)
19. [Credits & References](#19-credits--references)

---

## 1. Project Introduction

**TimeBank** is a community-driven skill exchange platform where people trade their time and skills instead of money. The idea is simple — every person has something valuable to offer, and every person needs help with something. TimeBank connects these people together using **Time Credits** as the currency.

**1 Time Credit = 1 Hour of Service**

Whether you can teach guitar, help someone with their garden, offer web development help, or cook a healthy meal — TimeBank gives your skills real value in the community.

This project was built as part of **DTI (Design Thinking and Innovation)** coursework, applying human-centered design principles to solve a real community problem.

### Project Tagline
> *"Exchange Skills. Build Community. Value Time."*

---

## 2. Problem Statement

In today's world:
- Many people have **skills they want to share** but don't know how to reach those who need them
- Many people **need help** with tasks but cannot always afford to pay for professional services
- Communities are becoming less connected — neighbors don't know each other
- Talented people, especially students and senior citizens, have skills that go **unused and unrecognized**

**TimeBank solves this** by creating a platform where skills are exchanged freely using time as the currency — making help accessible to everyone regardless of financial situation.

---

## 3. Objectives

- Build a platform where community members can **offer** and **request** services
- Use **Time Credits** (1 credit = 1 hour) as the exchange currency instead of money
- Make the platform **easy to use** with search, filtering, and sorting
- Support both **online** and **in-person** service modes
- Provide a **clean, modern UI** with dark mode support
- Make it **fully responsive** for mobile and desktop users
- Ensure **no technical barriers** — works by simply opening a browser

---

## 4. Features

### Core Features
| Feature | Description |
|---|---|
| 🔍 Search | Real-time search across listing titles and descriptions |
| 🗂️ Category Filter | Filter by Education, Home, Tech, Creative, Wellness |
| 🔄 Offer / Request Toggle | Switch between skills offered and skills needed |
| 📊 Sort Listings | Sort by Newest, Oldest, Most/Least Credits, Highest Rated |
| 🔖 Bookmarks | Save listings for later with one click |
| 📝 Post a Listing | Create your own offer or request with full details |
| ⭐ Ratings & Reviews | See community ratings and reviews |
| 📈 Time Balance Tracker | View earned, spent, and pending time credits |
| 🔔 Notifications | Stay updated on activity |
| 👤 User Profile | Access profile, saved listings, and settings |
| 🌙 Dark Mode | Full light/dark theme toggle |
| 📱 Responsive Design | Works on mobile, tablet, and desktop |
| 🏆 Leaderboard | See top contributors in the community |
| 📋 Activity Feed | Recent transactions and booking updates |

### UI/UX Features
- Skeleton loading animation while content loads
- Empty state with reset button when no results found
- Toast notifications for all user actions
- Smooth animations and hover effects
- Keyboard support (Escape key closes modals)
- ARIA labels for accessibility

---

## 5. User Interface Overview

The app has a clean **3-column layout**:

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR                                │
│  Logo    [Search Bar]    Balance | Theme | Notif | Avatar   │
├──────────┬──────────────────────────────┬───────────────────┤
│          │                              │                   │
│ SIDEBAR  │      MAIN CONTENT           │   RIGHT PANEL     │
│          │                             │                   │
│ Categories│  Header + Sort + Post Btn  │  Time Balance     │
│ - All    │                             │  Recent Activity  │
│ - Edu    │  [Card] [Card] [Card]       │  Leaderboard      │
│ - Home   │  [Card] [Card] [Card]       │  Reviews          │
│ - Tech   │                             │                   │
│ - Art    │  [Load More Button]         │                   │
│ - Health │                             │                   │
│          │                             │                   │
│ Filters  │                             │                   │
│ All/Off/ │                             │                   │
│ Request  │                             │                   │
└──────────┴─────────────────────────────┴───────────────────┘
```

### Navbar
- **Logo** — Clock icon + "TimeBank" brand name
- **Search Bar** — Live search for services, skills, or members
- **Time Balance** — Shows your current time credit balance (24.5 hrs)
- **Dark Mode Toggle** — Sun/Moon icon to switch themes
- **Notifications** — Bell icon with unread count badge
- **User Avatar** — Click to open dropdown (Profile, Saved, Settings, Logout)

### Left Sidebar
- **Categories** — All, Education & Tutoring, Home & Garden, Tech Support, Creative & Arts, Health & Wellness
- **Filter by Type** — All / Offers / Requests toggle buttons

### Main Content Area
- Page title and subtitle
- Sort dropdown + "Post Listing" button
- Grid of listing cards (6 at a time with Load More)
- Empty state when no results found

### Listing Card
Each card shows:
- Type badge (↑ Offering or ↓ Requesting) in green/orange
- Time credits required (clock icon + hours)
- Bookmark button (save for later)
- Title and description
- Service mode badge (Online or In-Person)
- Location badge (for in-person listings)
- User avatar and name
- Star rating and review count

### Right Panel
- **Time Balance Card** — Total balance (24.5 hrs), Earned (12), Spent (8), Pending (3), weekly trend (+2.5 this week)
- **Recent Activity** — Earned/spent/received transactions with icons and timestamps
- **Top Contributors** — Ranked leaderboard of most active members
- **Recent Reviews** — Community feedback with star ratings

---

## 6. How to Use the App

### Browsing Listings

**Step 1 — Search**
- Type any keyword in the search bar (e.g., "guitar", "web", "yoga")
- Results update automatically as you type

**Step 2 — Filter by Category**
- Click any category in the left sidebar (Education, Tech, Home, etc.)
- The active category is highlighted
- Click "All Services" to see everything again

**Step 3 — Filter by Type**
- Click "Offers" to see only what people are offering
- Click "Requests" to see what people need help with
- Click "All" to see both

**Step 4 — Sort Results**
- Click the Sort button at the top right of the listing area
- Choose: Newest, Oldest, Most Credits, Least Credits, or Top Rated

**Step 5 — Save a Listing**
- Click the bookmark icon on any card to save it
- Saved count appears in your profile dropdown
- Click again to unsave

**Step 6 — Load More**
- Click "Load More" at the bottom to see more listings
- The info text shows "Showing X of Y listings"

---

### Posting a Listing

**Step 1** — Click the **"Post Listing"** button (top right of main content)

**Step 2** — Choose your listing type:
- **I'm Offering** — You have a skill to share
- **I'm Requesting** — You need help with something

**Step 3** — Fill in the form:
- **Title** — Short, clear title (e.g., "Guitar Lessons for Beginners")
- **Category** — Select the most relevant category
- **Description** — Describe what you offer or need in detail
- **Time Credits** — How many hours this service takes (min 0.5)
- **Service Mode** — Online or In-Person

**Step 4** — If you chose In-Person:
- A location field appears
- Enter your city or area (e.g., "Vijayawada, Downtown")
- Note: Only the area is shown publicly, full address shared after acceptance

**Step 5** — Click **"Post Listing"**
- Your listing appears at the top of the feed immediately
- A success toast notification confirms it was posted

---

### Using Dark Mode
- Click the **sun/moon icon** in the navbar
- The entire app switches to dark theme
- Your preference is saved — it will remember your choice next visit

---

### Managing Your Profile
Click your avatar in the top right:
- **Profile** — View your profile (coming soon)
- **Saved Listings** — See how many listings you've bookmarked
- **Settings** — App settings (coming soon)
- **Log Out** — Sign out of your account

---

## 7. File Structure

```
Time-Bank-Platform-DTI/
├── index.html          ← Complete app UI (all sections and modals)
├── styles.css          ← All styling: layout, components, dark mode, animations
├── script.js           ← All logic: state, rendering, filters, events, forms
├── README.md           ← Project overview shown on GitHub homepage
└── DOCUMENTATION.md    ← This complete documentation file
```

### Why Single File Architecture?
This project uses a single HTML file approach because:
- No build tools or server needed — just open in browser
- Easy to deploy anywhere (GitHub Pages, Netlify, etc.)
- Simple for learning and understanding the code structure
- Faster to load with no extra network requests for routing

---

## 8. Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | Latest | Structure and semantic markup |
| CSS3 | Latest | Styling, animations, responsive layout |
| Vanilla JavaScript | ES6+ | App logic, DOM manipulation, state |
| DiceBear Avatars API | v7 | Dynamic avatar image generation |
| GitHub Pages | — | Free hosting and deployment |

### Why No Frameworks?
This project was intentionally built without React, Vue, or any other framework to:
- Demonstrate strong fundamental web development skills
- Keep zero dependencies — no npm, no node_modules
- Make the code easy to read and understand for anyone
- Show that great UIs can be built with just the basics

### Browser APIs Used
- `localStorage` — persisting theme and bookmarks
- `document.querySelectorAll` — DOM selection
- `addEventListener` — event handling
- `setTimeout` / `clearTimeout` — debounce and toast timing
- `window.matchMedia` (indirectly via CSS) — responsive behavior
- `Date.now()` — generating unique IDs for new listings

---

## 9. Technical Documentation

### HTML Architecture

The HTML is structured as a **Single Page Application** with all sections present in the DOM, visibility controlled by JavaScript using the `.hidden` class (`display: none`).

**Major HTML sections:**
```
<nav class="navbar">          ← Top navigation bar
<div class="main-container">  ← 3-column grid layout
  <aside class="sidebar">     ← Left: categories + filters
  <main class="main-content"> ← Center: listing cards
  <aside class="right-panel"> ← Right: balance, activity, leaderboard
<div id="modalOverlay">       ← Post listing modal (hidden by default)
<div id="toastContainer">     ← Toast notifications (dynamically filled)
<script src="script.js">      ← App logic loaded last
```

### CSS Architecture

**CSS Custom Properties (Variables):**
All colors use CSS variables defined on `:root`, overridden for dark mode via `[data-theme="dark"]`:

```css
:root {
  --bg-primary        /* Main background */
  --bg-secondary      /* Cards and panels */
  --text-primary      /* Main text */
  --text-secondary    /* Muted text */
  --accent-color      /* Brand color */
  --border-color      /* Borders */
  --offer-color       /* Green for offers */
  --request-color     /* Orange for requests */
}
```

**Layout techniques used:**
- Navbar: Flexbox with space-between
- 3-column main: CSS Grid (260px, 1fr, 300px)
- Listing cards: CSS Grid with auto-fill and minmax
- Card internals: Flexbox column

**Responsive breakpoints:**
- 1200px → Right panel hidden
- 900px → Single column (sidebar stacks above content)
- 600px → Navbar simplified, font sizes reduced

**Animations:**
- `@keyframes shimmer` → Skeleton loading cards
- `@keyframes slideIn` → Toast notifications
- CSS `transition` → Button hovers, card hovers, theme switch

### JavaScript Architecture

**File organization in script.js:**
```
1. Mock Data       → All sample listings, activities, leaderboard, reviews
2. State Object    → Single source of truth
3. DOM Cache       → All element references stored upfront
4. Utilities       → getAvatarUrl(), debounce()
5. Render Funcs    → Build HTML strings for cards, items
6. Filter Funcs    → Apply filters and sorting
7. Event Handlers  → Respond to user interactions
8. Bookmark Funcs  → Save/unsave listings
9. Theme Funcs     → Light/dark mode
10. Modal Funcs    → Open/close/validate post form
11. Toast Funcs    → Show notifications
12. Event Setup    → Attach all listeners
13. init()         → Entry point, called on DOMContentLoaded
```

**Rendering approach:**
JavaScript builds HTML strings using template literals and sets `innerHTML`. This is simple and effective for a project of this size without needing a virtual DOM.

```javascript
// Example pattern used throughout
elements.listingsGrid.innerHTML = visibleListings.map(renderListingCard).join('');
```

**Event Delegation:**
Instead of attaching click listeners to every card (which would break when cards re-render), a single listener on the grid delegates to bookmark buttons and star ratings:

```javascript
elements.listingsGrid.addEventListener('click', (e) => {
  const bookmarkBtn = e.target.closest('.bookmark-btn');
  if (bookmarkBtn) { toggleBookmark(parseInt(bookmarkBtn.dataset.bookmarkId)); }
});
```

---

## 10. State Management

All app state lives in one `state` object — the single source of truth:

```javascript
let state = {
  listings: [...mockListings],         // All listings (never filtered)
  filteredListings: [...mockListings], // Current filtered + sorted listings
  selectedCategory: 'all',
  selectedType: 'all',                 // 'all' | 'offer' | 'request'
  searchQuery: '',
  sortBy: 'newest',
  formType: 'offer',                   // Active type in Post modal
  serviceMode: 'online',               // Active mode in Post modal
  bookmarks: [],                       // Saved listing IDs (from localStorage)
  theme: 'light',                      // 'light' | 'dark' (from localStorage)
  itemsPerPage: 6,
  currentPage: 1
};
```

**Update flow:**
```
User Action
    ↓
Event Handler (e.g., handleCategoryClick)
    ↓
State Update (e.g., state.selectedCategory = 'tech')
    ↓
filterListings() → applies all active filters + sort
    ↓
renderListings() → updates the DOM
```

---

## 11. Data Models

### Listing Object
```javascript
{
  id: 1,
  type: 'offer',              // 'offer' or 'request'
  title: 'Guitar Lessons for Beginners',
  description: 'Learn to play guitar from scratch!',
  category: 'education',      // education | home | tech | creative | wellness
  timeCredits: 2,             // Min 0.5, step 0.5
  serviceMode: 'in-person',   // 'online' or 'in-person'
  location: 'Vijayawada',     // Empty string if online
  user: {
    name: 'Michael Chen',
    avatar: 'Michael'         // Seed for DiceBear API
  },
  rating: 4.9,
  reviewCount: 24
}
```

### Sample Listings in the App

| # | Title | Type | Category | Credits | Mode | Location |
|---|---|---|---|---|---|---|
| 1 | Guitar Lessons for Beginners | Offer | Education | 2 hrs | In-Person | Vijayawada |
| 2 | Need Help with Garden Landscaping | Request | Home | 3 hrs | In-Person | Guntur |
| 3 | Web Development Tutoring | Offer | Tech | 1.5 hrs | Online | — |
| 4 | Professional Photography Session | Offer | Creative | 2.5 hrs | In-Person | Hyderabad |
| 5 | Looking for Math Tutor | Request | Education | 1.5 hrs | Online | — |
| 6 | Yoga & Meditation Sessions | Offer | Wellness | 1 hr | In-Person | Chennai |
| 7 | Computer Setup & Troubleshooting | Request | Tech | 2 hrs | In-Person | Bangalore |
| 8 | Home-Cooked Meal Preparation | Offer | Home | 2 hrs | In-Person | Mumbai |

### Top Contributors (Leaderboard)
| Rank | Name | Hours Contributed |
|---|---|---|
| 1 | Priya Patel | 156 hours |
| 2 | Michael Chen | 142 hours |
| 3 | Sofia Rodriguez | 128 hours |
| 4 | Alex Johnson | 115 hours |
| 5 | Maria Garcia | 98 hours |

---

## 12. All Functions Reference

### Utility Functions
| Function | What It Does |
|---|---|
| `getAvatarUrl(seed)` | Returns DiceBear avatar URL using the seed name |
| `debounce(func, wait)` | Delays function execution by `wait` ms to avoid rapid repeated calls |

### Render Functions
| Function | What It Does |
|---|---|
| `renderListings()` | Main render — handles pagination, empty state, load more button |
| `renderListingCard(listing)` | Builds full HTML for one listing card |
| `renderActivityItem(activity)` | Builds HTML for one activity feed item |
| `renderLeaderboardItem(user, index)` | Builds HTML for one leaderboard row |
| `renderReviewItem(review)` | Builds HTML for one review card |
| `renderSidebarContent()` | Renders activity, leaderboard, reviews into right panel |
| `renderStars(rating)` | Returns 5 star SVG icons, filled based on rating value |

### Filter & Sort Functions
| Function | What It Does |
|---|---|
| `filterListings()` | Applies category + type + search filters, then sorts, then renders |
| `sortListings()` | Sorts filteredListings by the current sortBy value |
| `resetAllFilters()` | Resets everything back to default — all categories, all types, no search |

### Event Handler Functions
| Function | Triggered By | What It Does |
|---|---|---|
| `handleCategoryClick(e)` | Sidebar category click | Sets selected category, re-filters |
| `handleTypeFilter(e)` | Filter button click | Sets selected type, re-filters |
| `handleSearch(e)` | Search input (debounced 300ms) | Sets search query, re-filters |
| `handleSortClick()` | Sort button click | Shows/hides sort menu |
| `handleSortOptionClick(e)` | Sort option click | Sets sort value, updates label, re-filters |
| `handleTypeButtonClick(e)` | Modal type button | Switches Offer/Request in form |
| `handleServiceModeClick(e)` | Mode button | Switches Online/In-Person, shows/hides location |
| `handleFormSubmit(e)` | Form submit | Validates, creates listing, adds to feed |
| `handleDropdownAction(action)` | Dropdown menu items | Shows toast for profile/settings/logout |

### Bookmark Functions
| Function | What It Does |
|---|---|
| `toggleBookmark(listingId)` | Saves or removes a listing, updates localStorage |
| `updateSavedCount()` | Updates the saved count badge in the user dropdown |

### Theme Functions
| Function | What It Does |
|---|---|
| `initTheme()` | Loads saved theme from localStorage on startup |
| `toggleTheme()` | Switches between light and dark, saves to localStorage |
| `updateThemeToggleIcon()` | Shows sun icon (light) or moon icon (dark) |

### Modal Functions
| Function | What It Does |
|---|---|
| `openModal()` | Shows the Post Listing modal, disables page scroll |
| `closeModal()` | Hides modal, restores scroll, resets form completely |
| `clearFormErrors()` | Removes all validation error messages |
| `validateForm(formData)` | Checks all required fields, returns true or false |

### Other Functions
| Function | What It Does |
|---|---|
| `showToast(type, title, msg)` | Shows a notification toast — success, error, or warning |
| `loadMore()` | Loads next page of listings |
| `init()` | App entry point — sets theme, shows skeleton, renders app, attaches events |
| `initEventListeners()` | Attaches all event listeners to DOM elements |

---

## 13. Form Validation

The Post Listing form validates all fields before submission:

| Field | Rule | Error Message |
|---|---|---|
| Title | Cannot be empty | "Title is required" |
| Category | Must select one | "Please select a category" |
| Description | Cannot be empty | "Description is required" |
| Time Credits | Must be greater than 0 | "Please enter valid time credits" |
| Location | Required if In-Person is selected | "Location is required for in-person services" |

- Errors appear inline below each field
- All errors cleared before re-validating
- If validation fails, form stays open and errors are highlighted
- If validation passes, new listing is created and added to the top of the feed

---

## 14. localStorage Usage

Two pieces of data are saved in the browser so they persist across page refreshes:

| Key | Type | What's Stored |
|---|---|---|
| `timebank_bookmarks` | JSON Array | IDs of all bookmarked listings e.g. `[1, 3, 7]` |
| `timebank_theme` | String | Either `'light'` or `'dark'` |

This means:
- If you bookmark a listing and refresh the page — it's still bookmarked ✅
- If you switch to dark mode and refresh — dark mode stays on ✅
- If you post a new listing and refresh — it disappears (no backend yet) ⚠️

---

## 15. Responsive Design

The app is fully responsive and works on all screen sizes:

| Screen Size | Behavior |
|---|---|
| Desktop (1200px+) | Full 3-column layout — sidebar, content, right panel |
| Tablet (900px–1200px) | Right panel hidden, 2-column layout |
| Mobile (below 900px) | Single column — sidebar collapses above content |
| Small Mobile (below 600px) | Navbar simplifies, cards stack vertically |

Techniques used:
- CSS Grid with `auto-fill` and `minmax()` for listing cards
- CSS `@media` queries for breakpoints
- `flex-wrap` for navbar items on small screens
- Relative units (`rem`, `%`) instead of fixed `px` where possible

---

## 16. Future Improvements

### Short Term (Easy to Add)
- Add more listing categories (Transport, Food, Language, Music)
- Add tags/skills to listings for better search
- Add a filter for location-based listings
- Add listing expiry dates
- Show "New" badge on listings posted within 24 hours

### Medium Term (Needs Backend)
- Connect to a real database (Firebase / MongoDB)
- Add real user authentication (login / signup)
- Build a real-time messaging system between users
- Calculate actual time credits from completed exchanges
- Add email notifications for booking requests

### Long Term (Advanced Features)
- Mobile app version (React Native or PWA)
- Geolocation-based listing suggestions
- Skill verification and badge system
- Group time banking (organizations / neighborhoods)
- Integration with Google Calendar for scheduling
- Rating system after each completed exchange
- Report/flag system for inappropriate listings

---

## 17. Challenges Faced

| Challenge | How It Was Solved |
|---|---|
| Search + filter + sort all working together | Single `filterListings()` function applies all three simultaneously |
| Bookmarks disappearing on page refresh | Saved to `localStorage` as JSON, loaded on startup |
| Dark mode flashing on page load | `initTheme()` runs immediately before any rendering |
| Bookmark buttons breaking after re-render | Used event delegation on the parent grid instead of individual buttons |
| Modal scroll issue | `document.body.style.overflow = 'hidden'` disables page scroll when modal opens |
| Location field appearing/disappearing | Conditional show/hide using `.hidden` class based on service mode selection |
| Search being too fast (lag) | `debounce()` utility delays search by 300ms |
| Cards not updating when filter resets | Full re-render via `filterListings()` on every state change |

---

## 18. Learnings

Building TimeBank taught the following key skills:

**HTML:**
- Semantic HTML structure for accessibility
- ARIA labels for screen reader support
- Data attributes (`data-category`, `data-type`) for clean JS integration

**CSS:**
- CSS Custom Properties (variables) for theming
- CSS Grid for complex multi-column layouts
- Keyframe animations for skeleton loading and toasts
- Mobile-first responsive design with media queries

**JavaScript:**
- State management without a framework — single state object pattern
- Event delegation for dynamically rendered elements
- Debouncing for performance optimization
- `localStorage` for persistent user preferences
- Template literals for dynamic HTML generation
- Array methods: `filter()`, `sort()`, `map()`, `find()`, `includes()`, `unshift()`
- Modular function design — one function, one responsibility

**General:**
- How to plan a project structure before coding
- How to break a large UI into smaller components
- Importance of user feedback (toasts, loading states, empty states)
- How GitHub Pages works for free hosting

---

## 19. Credits & References

### APIs Used
- **DiceBear Avatars** — https://dicebear.com — Free avatar generation API

### Design Inspiration
- Dribbble community platform UI designs
- Material Design guidelines for card components
- Airbnb and TaskRabbit for service listing UX patterns

### Learning Resources
- MDN Web Docs — https://developer.mozilla.org
- CSS Tricks — https://css-tricks.com
- JavaScript.info — https://javascript.info

### Tools Used
- **VS Code** — Code editor
- **GitHub** — Version control and hosting
- **GitHub Pages** — Free deployment
- **Chrome DevTools** — Debugging and responsive testing
- **v0.dev** — UI design assistance

### Team
- **Mahitha** — Developer & Designer
- **Project Type** — DTI (Design Thinking and Innovation) Coursework

---

_TimeBank v1.0.0 — April 2026_

_Live Demo: https://mahitha-2776.github.io/Time-Bank-Platform-DTI/_
