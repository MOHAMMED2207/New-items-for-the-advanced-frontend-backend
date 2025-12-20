"use client";

import { navItems } from "./nav_items";
import { IconItem } from "./IconItem";
import { useMotionValue } from "framer-motion";
import { LogoutAuth } from "@/features/queries/auth/LogoutAuth";
import React, { useState } from "react";
import { ModelConfirmation } from "../confirmationModel/AlertDialog";
import { useFloatingAnimation } from "./useFloatingAnimation";

export default function FloatingDockNavbar() {
  const mouseX = useMotionValue(Infinity);

  // Logout function + loading state
  const { logout, isPending } = LogoutAuth();
  //
  //
  // Modal open/close control
  const [openConfirm, setOpenConfirm] = useState(false);
  // Store the action name (Logout / Delete)
  const [NameConfirm, setNameConfirm] = useState("");
  // Store the function that will run after confirmation
  const [processingFn, setProcessingFn] = useState<() => void>(() => () => {});
  //
  //

  // Handle which action to confirm
  const ConfirmationFunction = (item: any) => {
    setNameConfirm(item.label);

    // If logout → set logout function
    if (item.label === "Logout") {
      setProcessingFn(() => logout);
      setOpenConfirm(true);
    }

    // If delete → set delete action
    if (item.label === "Delete") {
      setProcessingFn(() => () => alert("DELETE ACTION"));
      setOpenConfirm(true);
    }

    // Show modal only for actions that need confirmation
    ["Logout", "Delete"].includes(item.label)
      ? setOpenConfirm(true)
      : setOpenConfirm(false);
  };

  // Return loading state only for Logout/Delete
  const LodaingHandling = (item: any) => {
    return ["Logout"].includes(item.label) ? isPending : false;
  };

  return (
    <React.Fragment>
      {/* Render the confirmation modal */}
      {openConfirm && (
        <ModelConfirmation
          open={openConfirm}
          setOpen={setOpenConfirm}
          ProcessingName={NameConfirm}
          theProcessing={processingFn}
          isPending={isPending}
        />
      )}

      {/* Floating navbar container */}
      <div
        className="fixed h-[3.75rem] bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 px-4 py-2 bg-[#0c0c0c] rounded-3xl shadow-xl border border-neutral-800"
        // Update mouse X for scaling animation
        onMouseMove={(e: React.MouseEvent) => {
          mouseX.set((e as any).pageX ?? (e.nativeEvent as any).pageX);
        }}
        // Reset hover animation when leaving navbar
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {/* Render all navbar items */}
        {navItems.map((item, idx) => (
          <div key={idx}>
            <IconItem
              mouseX={mouseX}
              {...item}
              // Trigger confirmation flow
              onClick={() => ConfirmationFunction(item)}
              // Loading animation for Logout/Delete
              isLoading={LodaingHandling(item)}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
