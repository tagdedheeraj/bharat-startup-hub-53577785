
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image as ImageIcon, Upload, Trash2, Copy, X, CheckCircle, RotateCw } from 'lucide-react';
import { useWebsiteImages, WebsiteImage } from '@/hooks/useWebsiteImages';
import { uploadFile } from '@/services/firebase/storageOperations';
import { toast } from '@/hooks/use-toast';

interface PageConfig {
  id: string;
  name: string;
  sections: {
    id: string;
    name: string;
  }[];
}

export const ImageManager = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [activePage, setActivePage] = useState('home');
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const { 
    images, 
    loading: loadingImages, 
    addImage, 
    deleteImage, 
    fetchImages 
  } = useWebsiteImages();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, section: string, page: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const timestamp = Date.now();
      const path = `website-images/${page}/${section}/${timestamp}_${file.name}`;
      const url = await uploadFile(path, file);
      
      const newImage: Omit<WebsiteImage, 'id'> = {
        url,
        name: file.name,
        section,
        page,
        createdAt: timestamp,
        path
      };
      
      await addImage(newImage);
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleImageDelete = async (image: WebsiteImage) => {
    try {
      await deleteImage(image.id, image.path);
      
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
    }
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopySuccess(url);
    setTimeout(() => setCopySuccess(null), 2000);
    toast({
      title: "Copied",
      description: "Image URL copied to clipboard",
    });
  };

  const pageConfigs: PageConfig[] = [
    { 
      id: 'home', 
      name: 'Home Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'features', name: 'Features Section' },
        { id: 'testimonials', name: 'Testimonials Section' },
        { id: 'stats', name: 'Statistics Section' },
        { id: 'cta', name: 'CTA Section' }
      ] 
    },
    { 
      id: 'about', 
      name: 'About Us Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'team', name: 'Team Section' },
        { id: 'mission', name: 'Mission & Vision' },
        { id: 'values', name: 'Core Values' }
      ] 
    },
    { 
      id: 'services', 
      name: 'Services Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'offerings', name: 'Service Offerings' },
        { id: 'process', name: 'Process Section' }
      ] 
    },
    { 
      id: 'it-solutions', 
      name: 'IT Solutions Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'services', name: 'Services Section' },
        { id: 'seo', name: 'SEO Packages' },
        { id: 'social', name: 'Social Media' },
        { id: 'google-ads', name: 'Google Ads' },
        { id: 'tech-stack', name: 'Tech Stack' }
      ] 
    },
  ];

  const handleImagePreview = (url: string) => {
    setSelectedImageUrl(url);
  };

  const closePreview = () => {
    setSelectedImageUrl(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Images</CardTitle>
        <CardDescription>Manage images across different sections of your website</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="home" value={activePage} onValueChange={setActivePage}>
          <TabsList className="mb-4 overflow-x-auto flex w-full">
            {pageConfigs.map((page) => (
              <TabsTrigger key={page.id} value={page.id} className="flex-shrink-0">
                {page.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {pageConfigs.map((page) => (
            <TabsContent key={page.id} value={page.id} className="space-y-6">
              {page.sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium">{section.name}</Label>
                    <div>
                      <Input
                        id={`${page.id}-${section.id}-upload`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, section.id, page.id)}
                        className="hidden"
                      />
                      <Button 
                        variant="outline" 
                        disabled={uploading}
                        onClick={() => document.getElementById(`${page.id}-${section.id}-upload`)?.click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {uploading ? 'Uploading...' : 'Upload Image'}
                      </Button>
                    </div>
                  </div>
                  
                  {loadingImages ? (
                    <div className="py-8 flex justify-center">
                      <RotateCw className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images
                        .filter(img => img.page === page.id && img.section === section.id)
                        .sort((a, b) => b.createdAt - a.createdAt) // Sort by newest first
                        .map((image) => (
                          <div key={image.id} className="relative group border rounded-lg overflow-hidden bg-gray-50">
                            <div 
                              className="aspect-square relative cursor-pointer"
                              onClick={() => handleImagePreview(image.url)}
                            >
                              <img 
                                src={image.url} 
                                alt={image.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="p-2 border-t bg-white">
                              <p className="text-xs font-medium truncate" title={image.name}>
                                {image.name.length > 20 ? `${image.name.substring(0, 20)}...` : image.name}
                              </p>
                            </div>

                            <div className="absolute top-2 right-2 flex space-x-1">
                              <Button
                                variant="destructive"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleImageDelete(image)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              
                              <Button
                                variant="secondary"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => copyImageUrl(image.url)}
                              >
                                {copySuccess === image.url ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}

                      {images.filter(img => img.page === page.id && img.section === section.id).length === 0 && (
                        <div className="col-span-full py-8 text-center border rounded-lg bg-gray-50">
                          <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">No images uploaded for this section yet</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>

      {/* Image Preview Modal */}
      {selectedImageUrl && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[80vh]">
            <img 
              src={selectedImageUrl} 
              alt="Preview" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-white hover:bg-gray-200"
              onClick={closePreview}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
