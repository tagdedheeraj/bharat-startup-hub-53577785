
import React, { useState } from 'react';
import { uploadProfileImage } from '@/services/firebase/uploadService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Loader2, Upload, Image as ImageIcon } from 'lucide-react';

interface ExpertImageUploaderProps {
  onImageUploaded?: (imageUrl: string) => void;
  expertType: 'founder' | 'expert' | 'team-member';
  name: string;
}

const ExpertImageUploader: React.FC<ExpertImageUploaderProps> = ({ onImageUploaded, expertType, name }) => {
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File Type",
        description: "Please select an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Check file size (2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please select an image smaller than 2MB",
        variant: "destructive"
      });
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Firebase
    try {
      setUploading(true);
      const imageUrl = await uploadProfileImage(file, expertType, name);
      
      toast({
        title: "Upload Successful",
        description: "Your image has been uploaded",
      });
      
      if (onImageUploaded) {
        onImageUploaded(imageUrl);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload Failed",
        description: "Could not upload image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upload {expertType === 'founder' ? 'Founder' : expertType === 'expert' ? 'Expert' : 'Team Member'} Image</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {imagePreview && (
            <div className="relative w-full h-40 rounded-md overflow-hidden border border-gray-200">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="expert-image">Profile Image</Label>
            <Input
              id="expert-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="cursor-pointer"
            />
            <p className="text-sm text-gray-500">
              Recommended size: 500x500px, Max size: 2MB
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled={uploading}
            onClick={() => document.getElementById('expert-image')?.click()}
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                {imagePreview ? (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Change Image
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </>
                )}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertImageUploader;
