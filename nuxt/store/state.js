export const state = () => ({
  announcements: {
    configuration: {},
    items: [],
  },
  baseURL: process.env.BASE_URL,
  browserFingerprint: '',
  configuration: {
    max_comment_size: 250,
    min_post: 100,
    min_reply: 100,
    listing_fee: 1000,
    min_skip_captcha: 1000,
    minimum_donation: 1000,
    maximum_donation_timeout_days: 70,
    version: 0,
  },
  deviceFingerprint: '',
  deviceResolution: {},
  discussions: [],
  lastDiscussions: [],
  activeStoreDiscussions: [],
  donations: [],
  excludedTags: [],
  faucetDonors: [],
  faucetStats: {},
  statistics: {},
  filterByFavorites: false,
  filteredStores: [],
  filteredTags: [],
  isDev: null,
  lastActivity: 0,
  lastCommentSeenTimestamp: 0,
  likedStores: {},
  loading: false,
  popularSearches: [],
  scores: [],
  scrolledStores: 0,
  selectedStore: { logged: false }, // makes components reactive to selectedStore.logged
  selectedStoreSettings: {},
  selectedTags: [],
  stores: [],
  storeSummary: [],
  storeEvents: [],
  storePages: 0,
  tags: [],
  wallets: [],
})

export default state
