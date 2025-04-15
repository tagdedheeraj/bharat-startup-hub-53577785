
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SiteNameInput from './SiteNameInput';
import ImageUpload from './ImageUpload';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const SiteIdentityForm = () => {
  const { settings, loading, uploadLogo, uploadFavicon, updateName } = useSiteSettings();
  const [siteName, setSiteName] = React.useState(settings?.siteName || 'Bharat Startup Solution');
  const [uploading, setUploading] = React.useState({ logo: false, favicon: false });

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    try {
      setUploading(prev => ({ ...prev, logo: true }));
      await uploadLogo(file);
    } catch (error) {
      console.error('Error uploading logo:', error);
    } finally {
      setUploading(prev => ({ ...prev, logo: false }));
    }
  };

  const handleFaviconUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    try {
      setUploading(prev => ({ ...prev, favicon: true }));
      await uploadFavicon(file);
    } catch (error) {
      console.error('Error uploading favicon:', error);
    } finally {
      setUploading(prev => ({ ...prev, favicon: false }));
    }
  };

  const handleSiteNameUpdate = async () => {
    if (siteName.trim() === settings?.siteName) return;
    await updateName(siteName);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Site Identity</CardTitle>
        <CardDescription>Manage your website's name, logo, and favicon</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <SiteNameInput 
          siteName={siteName}
          loading={loading}
          onSiteNameChange={setSiteName}
          onUpdate={handleSiteNameUpdate}
          currentSiteName={settings?.siteName}
        />
        
        <ImageUpload
          type="logo"
          currentImageUrl={settings?.logoUrl}
          uploading={uploading.logo}
          onUpload={handleLogoUpload}
          description="Recommended size: 200x50 pixels, PNG or SVG format"
        />
        
        <ImageUpload
          type="favicon"
          currentImageUrl={settings?.faviconUrl}
          uploading={uploading.favicon}
          onUpload={handleFaviconUpload}
          description="Recommended: 32x32 or 64x64 pixels, PNG format. The favicon will appear in browser tabs."
        />
      </CardContent>
    </Card>
  );
};

export default SiteIdentityForm;
