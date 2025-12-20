"use client";

import { Spinner } from "../ItemsWaiting/shadcn-io/spinner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
} from "./alert-dialog";

type DataType = {
  open: boolean; // 👈 اللي هيسيطرة على الفتح والقفل
  setOpen: (val: boolean) => void;
  ProcessingName: string;
  theProcessing: Function;
  isPending: boolean;
};

export const ModelConfirmation = ({
  open,
  setOpen,
  ProcessingName,
  theProcessing,
  isPending,
}: DataType) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* ❌ محدش يحط Trigger جوا */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently {ProcessingName}{" "}
            your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className=
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-red-900 hover:px-5 transition-all ease-in-out duration-300 "
            onClick={() => theProcessing()}
          >
            
            {isPending ? <Spinner /> : ProcessingName}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
