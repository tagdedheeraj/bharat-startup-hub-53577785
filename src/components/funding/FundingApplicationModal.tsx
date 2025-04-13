
import { useId, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FundingApplicationForm from "./FundingApplicationForm";
import { useDialog } from "@/contexts/dialog/DialogProvider";

interface FundingApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fundingTitle: string;
  fundingAmount: string;
}

export default function FundingApplicationModal({
  open,
  onOpenChange,
  fundingTitle,
  fundingAmount,
}: FundingApplicationModalProps) {
  const dialogId = useId();
  const { registerDialog, unregisterDialog, updateDialogState } = useDialog();
  
  console.log("FundingApplicationModal rendered with open:", open);
  
  useEffect(() => {
    // Register with dialog context
    registerDialog(dialogId, open);
    
    return () => {
      // Cleanup on unmount
      unregisterDialog(dialogId);
    };
  }, [dialogId, registerDialog, unregisterDialog]);
  
  useEffect(() => {
    // Update dialog state when open changes
    updateDialogState(dialogId, open);
  }, [dialogId, open, updateDialogState]);
  
  const handleSuccess = () => {
    console.log("Form submission successful, closing modal");
    onOpenChange(false);
    updateDialogState(dialogId, false);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      onOpenChange(newOpen);
      updateDialogState(dialogId, newOpen);
    }}>
      <DialogContent className="sm:max-w-[425px] z-[200]">
        <DialogHeader>
          <DialogTitle>Apply for Funding</DialogTitle>
          <DialogDescription>
            Complete the form below to apply for funding.
          </DialogDescription>
        </DialogHeader>
        <FundingApplicationForm
          fundingTitle={fundingTitle}
          fundingAmount={fundingAmount}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
