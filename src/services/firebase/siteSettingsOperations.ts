
import { 
  getDocument, 
  updateDocument, 
  createDocumentWithId 
} from './coreOperations';
import { uploadSiteAsset } from './storageOperations';

// Type for site settings
export interface SiteSettings {
  id?: string;
  logoUrl?: string;
  faviconUrl?: string;
  siteName?: string;
  updatedAt?: any;
}

const SITE_SETTINGS_ID = 'main';
const SITE_SETTINGS_COLLECTION = 'siteSettings';

/**
 * Get site settings
 */
export const getSiteSettings = async (): Promise<SiteSettings | null> => {
  return getDocument(SITE_SETTINGS_COLLECTION, SITE_SETTINGS_ID);
};

/**
 * Update site settings
 */
export const updateSiteSettings = async (data: Partial<SiteSettings>): Promise<void> => {
  try {
    // Check if settings document exists
    const existingSettings = await getSiteSettings();
    
    if (existingSettings) {
      // Update existing document
      await updateDocument(SITE_SETTINGS_COLLECTION, SITE_SETTINGS_ID, data);
    } else {
      // Create new document with the specified ID
      await createDocumentWithId(SITE_SETTINGS_COLLECTION, SITE_SETTINGS_ID, data);
    }
    
    console.log('Site settings updated successfully');
  } catch (error) {
    console.error('Error updating site settings:', error);
    throw error;
  }
};

/**
 * Update site logo
 */
export const updateSiteLogo = async (file: File): Promise<string> => {
  try {
    // Upload the logo file
    const logoUrl = await uploadSiteAsset('logo', file);
    
    // Update site settings with the new logo URL
    await updateSiteSettings({ logoUrl });
    
    return logoUrl;
  } catch (error) {
    console.error('Error updating site logo:', error);
    throw error;
  }
};

/**
 * Update site favicon
 */
export const updateSiteFavicon = async (file: File): Promise<string> => {
  try {
    // Upload the favicon file
    const faviconUrl = await uploadSiteAsset('favicon', file);
    
    // Update site settings with the new favicon URL
    await updateSiteSettings({ faviconUrl });
    
    return faviconUrl;
  } catch (error) {
    console.error('Error updating site favicon:', error);
    throw error;
  }
};

/**
 * Get navigation settings
 */
export const getNavigation = async () => {
  return getDocument('siteNavigation', 'main');
};

/**
 * Update navigation settings
 */
export const updateNavigation = async (data: any) => {
  return updateDocument('siteNavigation', 'main', data);
};

/**
 * Get home page settings
 */
export const getHomeSettings = async () => {
  return getDocument('homePageSettings', 'main');
};

/**
 * Update home page settings
 */
export const updateHomeSettings = async (data: any) => {
  return updateDocument('homePageSettings', 'main', data);
};
