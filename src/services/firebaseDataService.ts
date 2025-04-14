
// Re-export all firebase service operations
import * as FirebaseOperations from './firebase';
import { FirebaseData } from './firebase/coreOperations';
import { SiteSettings } from './firebase/siteSettingsOperations';

// Export types
export type { FirebaseData, SiteSettings };

// Re-export core operations
export const {
  createDocument,
  createDocumentWithId,
  getDocument,
  updateDocument,
  deleteDocument,
  queryDocuments
} = FirebaseOperations;

// Re-export storage operations
export const {
  uploadFile,
  deleteFile,
  uploadSiteAsset
} = FirebaseOperations;

// Re-export investor operations
export const {
  getInvestorProfile,
  updateInvestorProfile,
  getInvestorPortfolio,
  addPortfolioItem,
  updatePortfolioItem,
  removePortfolioItem,
  saveInvestment
} = FirebaseOperations;

// Re-export startup operations
export const {
  getStartupProfile,
  updateStartupProfile,
  getStartupMetrics,
  updateStartupMetrics,
  getStartupDocuments,
  addStartupDocument,
  updateStartupDocument,
  removeStartupDocument,
  saveStartupFundingRequest
} = FirebaseOperations;

// Re-export site settings operations
export const {
  getSiteSettings,
  updateSiteSettings,
  updateSiteLogo,
  updateSiteFavicon,
  getNavigation,
  updateNavigation,
  getHomeSettings,
  updateHomeSettings
} = FirebaseOperations;
