
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FundingApplicationForm from "./FundingApplicationForm";

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
  console.log("FundingApplicationModal rendered with open:", open);
  
  const handleSuccess = () => {
    console.log("Form submission successful, closing modal");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
