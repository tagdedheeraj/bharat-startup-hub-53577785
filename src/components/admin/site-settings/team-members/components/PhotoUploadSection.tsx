
import React from 'react';
import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

interface PhotoUploadSectionProps {
  photoPreview: string | null;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploadSection: React.FC<PhotoUploadSectionProps> = ({
  photoPreview,
  onPhotoChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {photoPreview ? (
          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <Upload className="text-gray-400 h-8 w-8" />
        )}
      </div>
      <div className="flex-1">
        <FormLabel>Photo</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={onPhotoChange}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PhotoUploadSection;
