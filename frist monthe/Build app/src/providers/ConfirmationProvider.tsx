"use client";

import React, { createContext, useContext, useState } from "react";
import { ModelConfirmation } from "@/components/confirmationModel/AlertDialog";

const ConfirmationContext = createContext<any>(null);

export function ConfirmationProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [actionName, setActionName] = useState("");
  const [processingFn, setProcessingFn] = useState<() => void>(() => () => {});
  const [isPending, setIsPending] = useState(false);

  const openConfirm = (name: string, action: () => Promise<void> | void) => {
    setActionName(name);
    setProcessingFn(() => action);
    setOpen(true);
  };

  const runAction = async () => {
    try {
      setIsPending(true);
      await processingFn();
    } finally {
      setIsPending(false);
      setOpen(false);
    }
  };

  return (
    <ConfirmationContext.Provider value={{ openConfirm }}>
      {children}

      {open && (
        <ModelConfirmation
          open={open}
          setOpen={setOpen}
          ProcessingName={actionName}
          theProcessing={runAction}
          isPending={isPending}
        />
      )}
    </ConfirmationContext.Provider>
  );
}

export function useConfirmation() {
  return useContext(ConfirmationContext);
}
