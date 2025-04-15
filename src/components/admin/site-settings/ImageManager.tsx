
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image, Upload, Trash2 } from 'lucide-react';
import { uploadFile, deleteFile } from '@/services/firebase/storageOperations';
import { toast } from '@/hooks/use-toast';

interface WebsiteImage {
  id: string;
  url: string;
  name: string;
  section: string;
}

export const ImageManager = () => {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<WebsiteImage[]>([]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, section: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const path = `website-images/${section}/${Date.now()}_${file.name}`;
      const url = await uploadFile(path, file);
      
      const newImage: WebsiteImage = {
        id: path,
        url,
        name: file.name,
        section
      };
      
      setImages(prev => [...prev, newImage]);
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
      await deleteFile(image.id);
      setImages(prev => prev.filter(img => img.id !== image.id));
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

  const sections = [
    { id: 'hero', name: 'Hero Section' },
    { id: 'services', name: 'Services Section' },
    { id: 'about', name: 'About Us Section' },
    { id: 'testimonials', name: 'Testimonials Section' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Images</CardTitle>
        <CardDescription>Manage images across different sections of your website</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>{section.name}</Label>
              <div>
                <Input
                  id={`${section.id}-upload`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, section.id)}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  disabled={uploading}
                  onClick={() => document.getElementById(`${section.id}-upload`)?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.filter(img => img.section === section.id).map((image) => (
                <div key={image.id} className="relative group">
                  <img 
                    src={image.url} 
                    alt={image.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleImageDelete(image)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
