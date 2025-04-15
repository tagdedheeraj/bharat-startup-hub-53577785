
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ImagePreviewModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePreviewModal = ({ imageUrl, onClose }: ImagePreviewModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[80vh]">
        <img 
          src={imageUrl} 
          alt="Preview" 
          className="max-w-full max-h-[80vh] object-contain"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 bg-white hover:bg-gray-200"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
