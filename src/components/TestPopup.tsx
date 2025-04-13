
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";

export default function TestPopup() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-bold"
      >
        Test Popup
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Test Popup Working!</DialogTitle>
            <DialogDescription>
              This popup is now working correctly. You can use this pattern to add more popups to your site.
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-4 bg-green-50 rounded-md">
            <p className="text-green-800">
              Your popup system is now fixed and working correctly.
            </p>
          </div>
          
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
