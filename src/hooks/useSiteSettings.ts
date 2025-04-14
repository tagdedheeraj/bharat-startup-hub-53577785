
import { useState, useEffect } from 'react';
import { 
  getSiteSettings, 
  updateSiteSettings, 
  updateSiteLogo, 
  updateSiteFavicon,
  SiteSettings
} from '@/services/firebaseDataService';
import { toast } from '@/hooks/use-toast';

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch site settings
  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await getSiteSettings();
      setSettings(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      console.error('Error fetching site settings:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initialize settings
  useEffect(() => {
    fetchSettings();
  }, []);

  // Update logo
  const uploadLogo = async (file: File) => {
    try {
      setLoading(true);
      const logoUrl = await updateSiteLogo(file);
      setSettings(prev => prev ? { ...prev, logoUrl } : { logoUrl });
      toast({
        title: "Success",
        description: "Logo updated successfully"
      });
      return logoUrl;
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update logo",
        variant: "destructive"
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update favicon
  const uploadFavicon = async (file: File) => {
    try {
      setLoading(true);
      const faviconUrl = await updateSiteFavicon(file);
      setSettings(prev => prev ? { ...prev, faviconUrl } : { faviconUrl });
      
      // Update favicon in the DOM
      updateFaviconInDOM(faviconUrl);
      
      toast({
        title: "Success",
        description: "Favicon updated successfully"
      });
      return faviconUrl;
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update favicon",
        variant: "destructive"
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update site name
  const updateName = async (siteName: string) => {
    try {
      setLoading(true);
      await updateSiteSettings({ siteName });
      setSettings(prev => prev ? { ...prev, siteName } : { siteName });
      toast({
        title: "Success",
        description: "Site name updated successfully"
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update site name",
        variant: "destructive"
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Helper to update favicon in the DOM
  const updateFaviconInDOM = (url: string) => {
    let link = document.querySelector('link[rel="icon"]');
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
    link.setAttribute('type', 'image/png'); // Assume PNG for Firebase Storage uploads
  };

  return {
    settings,
    loading,
    error,
    refetch: fetchSettings,
    uploadLogo,
    uploadFavicon,
    updateName
  };
};
