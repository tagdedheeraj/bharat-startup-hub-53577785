
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SiteIdentityForm from './site-identity/SiteIdentityForm';
import { ImageManager } from '@/components/admin/site-settings/ImageManager';

const SiteSettingsManager = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="site-identity">
        <TabsList className="mb-4">
          <TabsTrigger value="site-identity">Site Identity</TabsTrigger>
          <TabsTrigger value="website-images">Website Images</TabsTrigger>
        </TabsList>
        
        <TabsContent value="site-identity">
          <SiteIdentityForm />
        </TabsContent>
        
        <TabsContent value="website-images">
          <ImageManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettingsManager;
