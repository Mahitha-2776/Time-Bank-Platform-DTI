// ===== Mock Data =====
const mockListings = [
  {
    id: 1,
    type: 'offer',
    title: 'Guitar Lessons for Beginners',
    description: 'Learn to play guitar from scratch! I have 10 years of experience teaching acoustic and electric guitar.',
    category: 'education',
    timeCredits: 2,
    serviceMode: 'in-person',
    location: 'Vijayawada',
    user: { name: 'Michael Chen', avatar: 'Michael' },
    rating: 4.9,
    reviewCount: 24
  },
  {
    id: 2,
    type: 'request',
    title: 'Need Help with Garden Landscaping',
    description: 'Looking for someone to help design and plant a small vegetable garden in my backyard.',
    category: 'home',
    timeCredits: 3,
    serviceMode: 'in-person',
    location: 'Guntur',
    user: { name: 'Emily Davis', avatar: 'Emily' },
    rating: 4.7,
    reviewCount: 12
  },
  {
    id: 3,
    type: 'offer',
    title: 'Web Development Tutoring',
    description: 'Can teach HTML, CSS, JavaScript, and React. Perfect for beginners wanting to start coding.',
    category: 'tech',
    timeCredits: 1.5,
    serviceMode: 'online',
    location: '',
    user: { name: 'Alex Johnson', avatar: 'Alex' },
    rating: 5.0,
    reviewCount: 31
  },
  {
    id: 4,
    type: 'offer',
    title: 'Professional Photography Session',
    description: 'Offering portrait and event photography. Includes basic editing and digital delivery.',
    category: 'creative',
    timeCredits: 2.5,
    serviceMode: 'in-person',
    location: 'Hyderabad',
    user: { name: 'Sofia Rodriguez', avatar: 'Sofia' },
    rating: 4.8,
    reviewCount: 18
  },
  {
    id: 5,
    type: 'request',
    title: 'Looking for Math Tutor',
    description: 'Need help with calculus and statistics for my college courses. Weekly sessions preferred.',
    category: 'education',
    timeCredits: 1.5,
    serviceMode: 'online',
    location: '',
    user: { name: 'James Wilson', avatar: 'James' },
    rating: 4.5,
    reviewCount: 8
  },
  {
    id: 6,
    type: 'offer',
    title: 'Yoga & Meditation Sessions',
    description: 'Certified yoga instructor offering private sessions. All levels welcome, from beginner to advanced.',
    category: 'wellness',
    timeCredits: 1,
    serviceMode: 'in-person',
    location: 'Chennai',
    user: { name: 'Priya Patel', avatar: 'Priya' },
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 7,
    type: 'request',
    title: 'Computer Setup & Troubleshooting',
    description: 'Need help setting up a new home office with proper network configuration and software installation.',
    category: 'tech',
    timeCredits: 2,
    serviceMode: 'in-person',
    location: 'Bangalore',
    user: { name: 'Robert Brown', avatar: 'Robert' },
    rating: 4.3,
    reviewCount: 5
  },
  {
    id: 8,
    type: 'offer',
    title: 'Home-Cooked Meal Preparation',
    description: 'Can prepare healthy, delicious meals. Vegetarian and vegan options available.',
    category: 'home',
    timeCredits: 2,
    serviceMode: 'in-person',
    location: 'Mumbai',
    user: { name: 'Maria Garcia', avatar: 'Maria' },
    rating: 4.8,
    reviewCount: 27
  }
];

const mockActivities = [
  { type: 'earned', text: 'You earned <strong>2 hours</strong> for guitar lessons with John', time: '2 hours ago' },
  { type: 'spent', text: 'You spent <strong>1.5 hours</strong> for web design help', time: '5 hours ago' },
  { type: 'received', text: 'New booking request from <strong>Sarah</strong>', time: '1 day ago' },
  { type: 'earned', text: 'You earned <strong>1 hour</strong> for photography tips', time: '2 days ago' }
];

const mockLeaderboard = [
  { name: 'Priya Patel', hours: 156, avatar: 'Priya' },
  { name: 'Michael Chen', hours: 142, avatar: 'Michael' },
  { name: 'Sofia Rodriguez', hours: 128, avatar: 'Sofia' },
  { name: 'Alex Johnson', hours: 115, avatar: 'Alex' },
  { name: 'Maria Garcia', hours: 98, avatar: 'Maria' }
];

const mockReviews = [
  { name: 'John D.', avatar: 'John', rating: 5, text: 'Amazing guitar teacher! Very patient and knowledgeable.' },
  { name: 'Lisa M.', avatar: 'Lisa', rating: 5, text: 'The yoga sessions were transformative. Highly recommend!' },
  { name: 'Tom K.', avatar: 'Tom', rating: 4, text: 'Great web development tutoring. Learned a lot!' }
];

// ===== State =====
let state = {
  listings: [...mockListings],
  filteredListings: [...mockListings],
  selectedCategory: 'all',
  selectedType: 'all',
  searchQuery: '',
  formType: 'offer',
  serviceMode: 'online',
  sortBy: 'newest',
  bookmarks: JSON.parse(localStorage.getItem('timebank_bookmarks') || '[]'),
  theme: localStorage.getItem('timebank_theme') || 'light',
  itemsPerPage: 6,
  currentPage: 1
};

// ===== DOM Elements =====
const elements = {
  searchInput: document.getElementById('searchInput'),
  loadingState: document.getElementById('loadingState'),
  emptyState: document.getElementById('emptyState'),
  listingsGrid: document.getElementById('listingsGrid'),
  categoryItems: document.querySelectorAll('.category-item'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  postListingBtn: document.getElementById('postListingBtn'),
  modalOverlay: document.getElementById('modalOverlay'),
  closeModal: document.getElementById('closeModal'),
  cancelBtn: document.getElementById('cancelBtn'),
  listingForm: document.getElementById('listingForm'),
  typeButtons: document.querySelectorAll('.type-btn'),
  resetFilters: document.getElementById('resetFilters'),
  activityList: document.getElementById('activityList'),
  leaderboardList: document.getElementById('leaderboardList'),
  reviewsList: document.getElementById('reviewsList'),
  toastContainer: document.getElementById('toastContainer'),
  // New elements
  themeToggle: document.getElementById('themeToggle'),
  userAvatar: document.getElementById('userAvatar'),
  userDropdown: document.getElementById('userDropdown'),
  sortBtn: document.getElementById('sortBtn'),
  sortMenu: document.getElementById('sortMenu'),
  sortLabel: document.getElementById('sortLabel'),
  sortOptions: document.querySelectorAll('.sort-option'),
  loadMoreContainer: document.getElementById('loadMoreContainer'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  listingsInfo: document.getElementById('listingsInfo'),
  savedCount: document.getElementById('savedCount'),
  profileLink: document.getElementById('profileLink'),
  favoritesLink: document.getElementById('favoritesLink'),
  settingsLink: document.getElementById('settingsLink'),
  logoutLink: document.getElementById('logoutLink'),
  // Service mode elements
  modeButtons: document.querySelectorAll('.mode-btn'),
  locationField: document.getElementById('locationField'),
  locationInput: document.getElementById('location')
};

// ===== Utility Functions =====
function getAvatarUrl(seed) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== Render Functions =====
function renderStars(rating, interactive = false) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = '';
  
  for (let i = 1; i <= 5; i++) {
    const filled = i <= fullStars || (i === fullStars + 1 && hasHalfStar);
    starsHtml += `
      <svg class="star ${filled ? 'filled' : 'empty'}" viewBox="0 0 24 24" 
           ${interactive ? `data-rating="${i}"` : ''}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    `;
  }
  
  return starsHtml;
}

function renderListingCard(listing) {
  const isBookmarked = state.bookmarks.includes(listing.id);
  return `
    <div class="listing-card ${listing.type}" data-id="${listing.id}">
      <div class="card-header">
        <div class="card-header-left">
          <span class="card-type ${listing.type}">
            ${listing.type === 'offer' ? '↑ Offering' : '↓ Requesting'}
          </span>
        </div>
        <div class="card-header-right">
          <div class="card-time">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${listing.timeCredits} hrs
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-bookmark-id="${listing.id}" aria-label="${isBookmarked ? 'Remove from saved' : 'Save listing'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <h3 class="card-title">${listing.title}</h3>
      <p class="card-description">${listing.description}</p>
      <div class="card-meta">
        <span class="service-mode-badge ${listing.serviceMode}">
          ${listing.serviceMode === 'online' ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            Online
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            In-Person
          `}
        </span>
        ${listing.serviceMode === 'in-person' && listing.location ? `
          <span class="location-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${listing.location}
          </span>
        ` : ''}
      </div>
      <div class="card-footer">
        <div class="card-user">
          <div class="card-user-avatar">
            <img src="${getAvatarUrl(listing.user.avatar)}" alt="${listing.user.name}">
          </div>
          <span class="card-user-name">${listing.user.name}</span>
        </div>
        <div class="card-rating">
          ${renderStars(listing.rating)}
          <span class="rating-count">(${listing.reviewCount})</span>
        </div>
      </div>
    </div>
  `;
}

function renderActivityItem(activity) {
  return `
    <li class="activity-item">
      <div class="activity-icon ${activity.type}">
        ${activity.type === 'earned' ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v18"></path>
            <path d="m18 9-6-6-6 6"></path>
          </svg>
        ` : activity.type === 'spent' ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 21V3"></path>
            <path d="m6 15 6 6 6-6"></path>
          </svg>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        `}
      </div>
      <div class="activity-content">
        <p class="activity-text">${activity.text}</p>
        <span class="activity-time">${activity.time}</span>
      </div>
    </li>
  `;
}

function renderLeaderboardItem(user, index) {
  return `
    <li class="leaderboard-item">
      <span class="leaderboard-rank">${index + 1}</span>
      <div class="leaderboard-avatar">
        <img src="${getAvatarUrl(user.avatar)}" alt="${user.name}">
      </div>
      <div class="leaderboard-info">
        <span class="leaderboard-name">${user.name}</span>
        <span class="leaderboard-hours">${user.hours} hours contributed</span>
      </div>
    </li>
  `;
}

function renderReviewItem(review) {
  return `
    <div class="review-item">
      <div class="review-header">
        <div class="review-avatar">
          <img src="${getAvatarUrl(review.avatar)}" alt="${review.name}">
        </div>
        <span class="review-name">${review.name}</span>
        <div class="review-stars">
          ${Array(review.rating).fill().map(() => `
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          `).join('')}
        </div>
      </div>
      <p class="review-text">${review.text}</p>
    </div>
  `;
}

function renderListings() {
  if (state.filteredListings.length === 0) {
    elements.listingsGrid.classList.add('hidden');
    elements.emptyState.classList.remove('hidden');
    elements.loadMoreContainer.classList.add('hidden');
  } else {
    elements.emptyState.classList.add('hidden');
    elements.listingsGrid.classList.remove('hidden');
    
    // Pagination
    const totalItems = state.filteredListings.length;
    const itemsToShow = state.currentPage * state.itemsPerPage;
    const visibleListings = state.filteredListings.slice(0, itemsToShow);
    
    elements.listingsGrid.innerHTML = visibleListings.map(renderListingCard).join('');
    
    // Update load more button
    if (itemsToShow >= totalItems) {
      elements.loadMoreContainer.classList.add('hidden');
    } else {
      elements.loadMoreContainer.classList.remove('hidden');
      elements.listingsInfo.textContent = `Showing ${visibleListings.length} of ${totalItems} listings`;
    }
  }
  
  // Update saved count in dropdown
  updateSavedCount();
}

function renderSidebarContent() {
  elements.activityList.innerHTML = mockActivities.map(renderActivityItem).join('');
  elements.leaderboardList.innerHTML = mockLeaderboard.map(renderLeaderboardItem).join('');
  elements.reviewsList.innerHTML = mockReviews.map(renderReviewItem).join('');
}

// ===== Filter Functions =====
function filterListings() {
  state.filteredListings = state.listings.filter(listing => {
    const matchesCategory = state.selectedCategory === 'all' || listing.category === state.selectedCategory;
    const matchesType = state.selectedType === 'all' || listing.type === state.selectedType;
    const matchesSearch = state.searchQuery === '' || 
      listing.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });
  
  // Sort listings
  sortListings();
  
  // Reset pagination when filters change
  state.currentPage = 1;
  
  renderListings();
}

function sortListings() {
  switch (state.sortBy) {
    case 'newest':
      state.filteredListings.sort((a, b) => b.id - a.id);
      break;
    case 'oldest':
      state.filteredListings.sort((a, b) => a.id - b.id);
      break;
    case 'credits-high':
      state.filteredListings.sort((a, b) => b.timeCredits - a.timeCredits);
      break;
    case 'credits-low':
      state.filteredListings.sort((a, b) => a.timeCredits - b.timeCredits);
      break;
    case 'rating':
      state.filteredListings.sort((a, b) => b.rating - a.rating);
      break;
  }
}

function handleCategoryClick(e) {
  const categoryItem = e.currentTarget;
  const category = categoryItem.dataset.category;
  
  elements.categoryItems.forEach(item => item.classList.remove('active'));
  categoryItem.classList.add('active');
  
  state.selectedCategory = category;
  filterListings();
}

function handleTypeFilter(e) {
  const filterBtn = e.currentTarget;
  const type = filterBtn.dataset.type;
  
  elements.filterButtons.forEach(btn => btn.classList.remove('active'));
  filterBtn.classList.add('active');
  
  state.selectedType = type;
  filterListings();
}

function handleSearch(e) {
  state.searchQuery = e.target.value;
  filterListings();
}

function resetAllFilters() {
  state.selectedCategory = 'all';
  state.selectedType = 'all';
  state.searchQuery = '';
  state.sortBy = 'newest';
  state.currentPage = 1;
  
  elements.searchInput.value = '';
  elements.categoryItems.forEach(item => {
    item.classList.toggle('active', item.dataset.category === 'all');
  });
  elements.filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === 'all');
  });
  elements.sortLabel.textContent = 'Newest';
  elements.sortOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.sort === 'newest');
  });
  
  filterListings();
}

// ===== Sort Functions =====
function handleSortClick() {
  elements.sortMenu.classList.toggle('hidden');
}

function handleSortOptionClick(e) {
  const option = e.target;
  const sortValue = option.dataset.sort;
  
  if (!sortValue) return;
  
  state.sortBy = sortValue;
  state.currentPage = 1;
  
  // Update UI
  elements.sortOptions.forEach(opt => opt.classList.remove('active'));
  option.classList.add('active');
  
  // Update label
  const labelMap = {
    'newest': 'Newest',
    'oldest': 'Oldest',
    'credits-high': 'Most Credits',
    'credits-low': 'Least Credits',
    'rating': 'Top Rated'
  };
  elements.sortLabel.textContent = labelMap[sortValue];
  
  elements.sortMenu.classList.add('hidden');
  filterListings();
}

// ===== Bookmark Functions =====
function toggleBookmark(listingId) {
  const index = state.bookmarks.indexOf(listingId);
  
  if (index === -1) {
    state.bookmarks.push(listingId);
    showToast('success', 'Saved!', 'Listing added to your saved items.');
  } else {
    state.bookmarks.splice(index, 1);
    showToast('success', 'Removed', 'Listing removed from saved items.');
  }
  
  // Save to localStorage
  localStorage.setItem('timebank_bookmarks', JSON.stringify(state.bookmarks));
  
  // Re-render to update bookmark buttons
  renderListings();
}

function updateSavedCount() {
  if (elements.savedCount) {
    elements.savedCount.textContent = state.bookmarks.length;
    elements.savedCount.style.display = state.bookmarks.length > 0 ? 'inline' : 'none';
  }
}

// ===== Theme Functions =====
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeToggleIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('timebank_theme', state.theme);
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  const sunIcon = elements.themeToggle.querySelector('.sun-icon');
  const moonIcon = elements.themeToggle.querySelector('.moon-icon');
  
  if (state.theme === 'dark') {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// ===== User Dropdown Functions =====
function toggleUserDropdown() {
  elements.userDropdown.classList.toggle('hidden');
}

function closeUserDropdown(e) {
  if (!elements.userAvatar.contains(e.target) && !elements.userDropdown.contains(e.target)) {
    elements.userDropdown.classList.add('hidden');
  }
}

function handleDropdownAction(action) {
  elements.userDropdown.classList.add('hidden');
  
  switch (action) {
    case 'profile':
      showToast('success', 'Profile', 'Profile page coming soon!');
      break;
    case 'favorites':
      // Filter to show only bookmarked items
      if (state.bookmarks.length === 0) {
        showToast('warning', 'No Saved Items', 'You have not saved any listings yet.');
      } else {
        showToast('success', 'Saved Listings', `You have ${state.bookmarks.length} saved listing(s).`);
      }
      break;
    case 'settings':
      showToast('success', 'Settings', 'Settings page coming soon!');
      break;
    case 'logout':
      showToast('success', 'Logged Out', 'You have been logged out successfully.');
      break;
  }
}

// ===== Pagination Functions =====
function loadMore() {
  state.currentPage++;
  renderListings();
}

// ===== Modal Functions =====
function openModal() {
  elements.modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
  elements.listingForm.reset();
  clearFormErrors();
  
  // Reset type buttons
  elements.typeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.formType === 'offer');
  });
  state.formType = 'offer';
  
  // Reset service mode
  elements.modeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === 'online');
  });
  state.serviceMode = 'online';
  elements.locationField.classList.add('hidden');
}

function handleTypeButtonClick(e) {
  const btn = e.currentTarget;
  elements.typeButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.formType = btn.dataset.formType;
}

function handleServiceModeClick(e) {
  const btn = e.currentTarget;
  const mode = btn.dataset.mode;
  
  elements.modeButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.serviceMode = mode;
  
  // Show/hide location field based on service mode
  if (mode === 'in-person') {
    elements.locationField.classList.remove('hidden');
  } else {
    elements.locationField.classList.add('hidden');
    elements.locationInput.value = '';
    // Clear any location error
    const locationError = document.getElementById('locationError');
    if (locationError) locationError.textContent = '';
    elements.locationInput.classList.remove('error');
  }
}

function clearFormErrors() {
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('.listing-form input, .listing-form select, .listing-form textarea').forEach(el => {
    el.classList.remove('error');
  });
}

function validateForm(formData) {
  let isValid = true;
  clearFormErrors();
  
  if (!formData.title.trim()) {
    document.getElementById('titleError').textContent = 'Title is required';
    document.getElementById('title').classList.add('error');
    isValid = false;
  }
  
  if (!formData.category) {
    document.getElementById('categoryError').textContent = 'Please select a category';
    document.getElementById('category').classList.add('error');
    isValid = false;
  }
  
  if (!formData.description.trim()) {
    document.getElementById('descriptionError').textContent = 'Description is required';
    document.getElementById('description').classList.add('error');
    isValid = false;
  }
  
  if (!formData.timeCredits || formData.timeCredits <= 0) {
    document.getElementById('timeCreditsError').textContent = 'Please enter valid time credits';
    document.getElementById('timeCredits').classList.add('error');
    isValid = false;
  }
  
  // Validate location for in-person services
  if (formData.serviceMode === 'in-person' && !formData.location.trim()) {
    document.getElementById('locationError').textContent = 'Location is required for in-person services';
    document.getElementById('location').classList.add('error');
    isValid = false;
  }
  
  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = {
    title: document.getElementById('title').value,
    category: document.getElementById('category').value,
    description: document.getElementById('description').value,
    timeCredits: parseFloat(document.getElementById('timeCredits').value),
    serviceMode: state.serviceMode,
    location: document.getElementById('location').value
  };
  
  if (!validateForm(formData)) {
    return;
  }
  
  // Create new listing
  const newListing = {
    id: Date.now(),
    type: state.formType,
    title: formData.title,
    description: formData.description,
    category: formData.category,
    timeCredits: formData.timeCredits,
    serviceMode: formData.serviceMode,
    location: formData.serviceMode === 'in-person' ? formData.location : '',
    user: { name: 'Sarah Thompson', avatar: 'Sarah' },
    rating: 0,
    reviewCount: 0
  };
  
  state.listings.unshift(newListing);
  filterListings();
  closeModal();
  
  showToast('success', 'Listing Posted!', `Your ${state.formType} has been published successfully.`);
}

// ===== Toast Functions =====
function showToast(type, title, message) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconSvg = type === 'success' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>`
    : type === 'error'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" x2="9" y1="9" y2="15"></line>
        <line x1="9" x2="15" y1="9" y2="15"></line>
      </svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <line x1="12" x2="12" y1="9" y2="13"></line>
        <line x1="12" x2="12.01" y1="17" y2="17"></line>
      </svg>`;
  
  toast.innerHTML = `
    <span class="toast-icon ${type}">${iconSvg}</span>
    <div class="toast-content">
      <span class="toast-title">${title}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close" aria-label="Close">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  `;
  
  elements.toastContainer.appendChild(toast);
  
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => toast.remove());
  
  setTimeout(() => {
    toast.style.animation = 'slideIn var(--transition-normal) reverse';
    setTimeout(() => toast.remove(), 200);
  }, 4000);
}

// ===== Event Listeners =====
function initEventListeners() {
  // Search
  elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
  
  // Category filters
  elements.categoryItems.forEach(item => {
    item.addEventListener('click', handleCategoryClick);
  });
  
  // Type filters
  elements.filterButtons.forEach(btn => {
    btn.addEventListener('click', handleTypeFilter);
  });
  
  // Reset filters
  elements.resetFilters.addEventListener('click', resetAllFilters);
  
  // Modal
  elements.postListingBtn.addEventListener('click', openModal);
  elements.closeModal.addEventListener('click', closeModal);
  elements.cancelBtn.addEventListener('click', closeModal);
  elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) closeModal();
  });
  
  // Form type buttons
  elements.typeButtons.forEach(btn => {
    btn.addEventListener('click', handleTypeButtonClick);
  });
  
  // Service mode buttons
  elements.modeButtons.forEach(btn => {
    btn.addEventListener('click', handleServiceModeClick);
  });
  
  // Form submission
  elements.listingForm.addEventListener('submit', handleFormSubmit);
  
  // Escape key to close modal and dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!elements.modalOverlay.classList.contains('hidden')) {
        closeModal();
      }
      elements.userDropdown.classList.add('hidden');
      elements.sortMenu.classList.add('hidden');
    }
  });
  
  // Card click (interactive rating and bookmark)
  elements.listingsGrid.addEventListener('click', (e) => {
    // Bookmark button
    const bookmarkBtn = e.target.closest('.bookmark-btn');
    if (bookmarkBtn) {
      e.stopPropagation();
      const listingId = parseInt(bookmarkBtn.dataset.bookmarkId);
      toggleBookmark(listingId);
      return;
    }
    
    // Star rating
    const star = e.target.closest('.star');
    if (star) {
      const rating = parseInt(star.dataset.rating);
      const card = star.closest('.listing-card');
      const cardId = parseInt(card.dataset.id);
      
      // Find and update listing
      const listing = state.listings.find(l => l.id === cardId);
      if (listing) {
        listing.rating = rating;
        listing.reviewCount += 1;
        filterListings();
        showToast('success', 'Rating Submitted', `You rated this listing ${rating} stars!`);
      }
    }
  });
  
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // User dropdown
  elements.userAvatar.addEventListener('click', toggleUserDropdown);
  document.addEventListener('click', closeUserDropdown);
  
  // Dropdown menu items
  elements.profileLink.addEventListener('click', (e) => { e.preventDefault(); handleDropdownAction('profile'); });
  elements.favoritesLink.addEventListener('click', (e) => { e.preventDefault(); handleDropdownAction('favorites'); });
  elements.settingsLink.addEventListener('click', (e) => { e.preventDefault(); handleDropdownAction('settings'); });
  elements.logoutLink.addEventListener('click', (e) => { e.preventDefault(); handleDropdownAction('logout'); });
  
  // Sort dropdown
  elements.sortBtn.addEventListener('click', handleSortClick);
  elements.sortOptions.forEach(opt => {
    opt.addEventListener('click', handleSortOptionClick);
  });
  
  // Close sort menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!elements.sortBtn.contains(e.target) && !elements.sortMenu.contains(e.target)) {
      elements.sortMenu.classList.add('hidden');
    }
  });
  
  // Load more button
  elements.loadMoreBtn.addEventListener('click', loadMore);
}

// ===== Initialize =====
function init() {
  // Initialize theme
  initTheme();
  
  // Show loading state
  elements.loadingState.classList.remove('hidden');
  elements.listingsGrid.classList.add('hidden');
  
  // Simulate loading delay
  setTimeout(() => {
    elements.loadingState.classList.add('hidden');
    filterListings(); // This will sort and render
    renderSidebarContent();
    updateSavedCount();
  }, 1000);
  
  initEventListeners();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
