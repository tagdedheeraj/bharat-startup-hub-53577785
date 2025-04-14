
// Re-export all firebase service operations
import * as FirebaseOperations from './firebase';

// Use a more efficient export approach
export const {
  // Re-export core operations
  addDocument,
  getDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
  
  // Re-export storage operations
  uploadFile,
  getFileUrl,
  deleteFile,
  
  // Re-export investor operations
  getInvestorProfile,
  updateInvestorProfile,
  getInvestorPortfolio,
  addPortfolioItem,
  updatePortfolioItem,
  removePortfolioItem,
  
  // Re-export startup operations
  getStartupProfile,
  updateStartupProfile,
  getStartupMetrics,
  updateStartupMetrics,
  getStartupDocuments,
  addStartupDocument,
  updateStartupDocument,
  removeStartupDocument,
  
  // Re-export site settings operations
  getSiteSettings,
  updateSiteSettings,
  getNavigation,
  updateNavigation,
  getHomeSettings,
  updateHomeSettings
} = FirebaseOperations;
