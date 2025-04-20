
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageIcon, Settings, Globe } from 'lucide-react';
import SiteIdentityForm from './site-identity/SiteIdentityForm';
import { ImageManager } from '@/components/admin/site-settings/ImageManager';

const SiteSettingsManager = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="website-images" className="w-full">
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="website-images" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Website Images
          </TabsTrigger>
          <TabsTrigger value="site-identity" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Site Identity
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="website-images" className="mt-0">
          <ImageManager />
        </TabsContent>
        
        <TabsContent value="site-identity" className="mt-0">
          <SiteIdentityForm />
        </TabsContent>
        
        <TabsContent value="settings" className="mt-0">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Additional settings and configurations will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettingsManager;
