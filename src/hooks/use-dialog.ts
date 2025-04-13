
import { useDialog as useDialogContext } from "@/contexts/dialog/DialogProvider";
import { useState, useEffect, useId, useCallback } from "react";

export interface UseDialogOptions {
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useDialog(options: UseDialogOptions = {}) {
  const { initialOpen = false, onOpenChange } = options;
  const [open, setOpen] = useState(initialOpen);
  const dialogId = useId();
  
  const { registerDialog, unregisterDialog, updateDialogState } = useDialogContext();
  
  // Register dialog with context when component mounts
  useEffect(() => {
    console.log("Registering dialog:", dialogId, open);
    registerDialog(dialogId, open);
    return () => {
      console.log("Unregistering dialog:", dialogId);
      unregisterDialog(dialogId);
    };
  }, [dialogId, registerDialog, unregisterDialog]);
  
  // Update context when open state changes
  useEffect(() => {
    console.log("Dialog state changed:", dialogId, open);
    updateDialogState(dialogId, open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  }, [dialogId, open, updateDialogState, onOpenChange]);
  
  // Handler for changing open state
  const handleOpenChange = useCallback((newOpen: boolean) => {
    console.log("Setting dialog state:", dialogId, newOpen);
    setOpen(newOpen);
  }, [dialogId]);
  
  return {
    open,
    setOpen: handleOpenChange,
    dialogId
  };
}
