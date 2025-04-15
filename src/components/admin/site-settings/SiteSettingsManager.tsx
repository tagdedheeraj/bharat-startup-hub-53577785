
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { Image, Upload } from 'lucide-react';
import { ImageManager } from './ImageManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SiteSettingsManager = () => {
  const { settings, loading, uploadLogo, uploadFavicon, updateName } = useSiteSettings();
  const [siteName, setSiteName] = useState(settings?.siteName || 'Bharat Startup Solution');
  const [uploading, setUploading] = useState({ logo: false, favicon: false });

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
    <div className="space-y-6">
      <Tabs defaultValue="site-identity">
        <TabsList className="mb-4">
          <TabsTrigger value="site-identity">Site Identity</TabsTrigger>
          <TabsTrigger value="website-images">Website Images</TabsTrigger>
        </TabsList>
        
        <TabsContent value="site-identity">
          <Card>
            <CardHeader>
              <CardTitle>Site Identity</CardTitle>
              <CardDescription>Manage your website's name, logo, and favicon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Site Name */}
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <div className="flex gap-2">
                  <Input 
                    id="siteName" 
                    value={siteName} 
                    onChange={(e) => setSiteName(e.target.value)} 
                    placeholder="Enter site name" 
                  />
                  <Button 
                    onClick={handleSiteNameUpdate} 
                    disabled={loading || siteName.trim() === settings?.siteName}
                  >
                    Update
                  </Button>
                </div>
              </div>
              
              {/* Logo Upload */}
              <div className="space-y-2">
                <Label htmlFor="logoUpload">Website Logo</Label>
                <div className="flex items-center gap-4">
                  {settings?.logoUrl && (
                    <div className="h-16 w-16 overflow-hidden rounded-md border">
                      <img 
                        src={settings.logoUrl} 
                        alt="Current logo" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <Input
                      id="logoUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <Button 
                      disabled={uploading.logo} 
                      onClick={() => document.getElementById('logoUpload')?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {uploading.logo ? 'Uploading...' : settings?.logoUrl ? 'Change Logo' : 'Upload Logo'}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 200x50 pixels, PNG or SVG format</p>
              </div>
              
              {/* Favicon Upload */}
              <div className="space-y-2">
                <Label htmlFor="faviconUpload">Favicon</Label>
                <div className="flex items-center gap-4">
                  {settings?.faviconUrl && (
                    <div className="h-10 w-10 overflow-hidden rounded-md border">
                      <img 
                        src={settings.faviconUrl} 
                        alt="Current favicon" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <Input
                      id="faviconUpload"
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml"
                      onChange={handleFaviconUpload}
                      className="hidden"
                    />
                    <Button 
                      disabled={uploading.favicon} 
                      onClick={() => document.getElementById('faviconUpload')?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Image className="mr-2 h-4 w-4" />
                      {uploading.favicon ? 'Uploading...' : settings?.faviconUrl ? 'Change Favicon' : 'Upload Favicon'}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommended: 32x32 or 64x64 pixels, PNG format. The favicon will appear in browser tabs.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="website-images">
          <ImageManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettingsManager;
