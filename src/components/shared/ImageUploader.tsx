
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFirebaseStorage } from '@/hooks/useFirebaseStorage';
import { Loader2, Upload, CheckCircle, X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onUploadComplete: (url: string) => void;
  folder?: string;
  accept?: string;
  maxSize?: number;
  className?: string;
  buttonText?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onUploadComplete,
  folder = 'images',
  accept = 'image/*',
  maxSize = 2 * 1024 * 1024, // 2MB default
  className = '',
  buttonText = 'Upload Image'
}) => {
  const { uploadImage, uploading, uploadProgress } = useFirebaseStorage();
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resetState = () => {
    setPreview(null);
    setError(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Reset previous states
    resetState();
    
    // Validate file size
    if (file.size > maxSize) {
      setError(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`);
      toast({
        title: "Error",
        description: `File size exceeds ${maxSize / (1024 * 1024)}MB limit`,
        variant: "destructive"
      });
      return;
    }
    
    // Create a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Upload to Firebase
    try {
      const url = await uploadImage(file, folder);
      onUploadComplete(url);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md mb-4 w-full flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      {preview && (
        <div className="relative mb-4 w-full">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-auto rounded-md object-cover" 
            style={{ maxHeight: '200px' }} 
          />
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
              <Loader2 className="h-8 w-8 text-white animate-spin mb-2" />
              <Progress value={uploadProgress} className="w-3/4 h-2" />
            </div>
          )}
        </div>
      )}
      
      <div className="flex items-center space-x-2 w-full">
        <input
          type="file"
          id="image-upload"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
          disabled={uploading}
        />
        <Button 
          onClick={() => document.getElementById('image-upload')?.click()}
          disabled={uploading}
          variant="outline"
          className="w-full"
        >
          {uploading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : preview ? (
            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
          ) : (
            <Upload className="h-4 w-4 mr-2" />
          )}
          {uploading ? 'Uploading...' : preview ? 'Upload Complete' : buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;
