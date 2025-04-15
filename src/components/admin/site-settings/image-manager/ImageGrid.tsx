
import React from 'react';
import { Button } from '@/components/ui/button';
import { ImageIcon, Trash2, Copy, CheckCircle } from 'lucide-react';
import { WebsiteImage } from '@/hooks/useWebsiteImages';

interface ImageGridProps {
  images: WebsiteImage[];
  sectionId: string;
  pageId: string;
  onPreview: (url: string) => void;
  onDelete: (image: WebsiteImage) => void;
  onCopy: (url: string) => void;
  copySuccess: string | null;
}

const ImageGrid = ({ 
  images, 
  sectionId, 
  pageId, 
  onPreview, 
  onDelete, 
  onCopy, 
  copySuccess 
}: ImageGridProps) => {
  const filteredImages = images
    .filter(img => img.page === pageId && img.section === sectionId)
    .sort((a, b) => b.createdAt - a.createdAt);

  if (filteredImages.length === 0) {
    return (
      <div className="col-span-full py-8 text-center border rounded-lg bg-gray-50">
        <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
        <p className="text-muted-foreground">No images uploaded for this section yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredImages.map((image) => (
        <div key={image.id} className="relative group border rounded-lg overflow-hidden bg-gray-50">
          <div 
            className="aspect-square relative cursor-pointer"
            onClick={() => onPreview(image.url)}
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
              onClick={() => onDelete(image)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onCopy(image.url)}
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
    </div>
  );
};

export default ImageGrid;
