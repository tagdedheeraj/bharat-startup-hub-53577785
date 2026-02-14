
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HeaderSectionProps = {
  onClose: () => void;
};

export default function HeaderSection({ onClose }: HeaderSectionProps) {
  return (
    <div className="px-4 mb-6 flex items-center justify-between">
      <img 
        src="/lovable-uploads/incorpwale-logo.png" 
        alt="InCorpWale"
        className="h-12 w-auto"
      />
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X size={20} />
      </Button>
    </div>
  );
}
