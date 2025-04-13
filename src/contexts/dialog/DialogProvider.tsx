
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface DialogContextType {
  isAnyDialogOpen: boolean;
  registerDialog: (id: string, isOpen: boolean) => void;
  unregisterDialog: (id: string) => void;
  updateDialogState: (id: string, isOpen: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({});

  const registerDialog = (id: string, isOpen: boolean) => {
    setOpenDialogs(prev => ({ ...prev, [id]: isOpen }));
  };

  const unregisterDialog = (id: string) => {
    setOpenDialogs(prev => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const updateDialogState = (id: string, isOpen: boolean) => {
    setOpenDialogs(prev => ({ ...prev, [id]: isOpen }));
  };

  const isAnyDialogOpen = Object.values(openDialogs).some(isOpen => isOpen);

  return (
    <DialogContext.Provider value={{ 
      isAnyDialogOpen, 
      registerDialog, 
      unregisterDialog, 
      updateDialogState 
    }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
