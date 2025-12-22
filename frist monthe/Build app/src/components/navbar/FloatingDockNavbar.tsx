"use client";

import { navItems } from "./nav_items";
import { IconItem } from "./IconItem";
import { useMotionValue } from "framer-motion";
import { LogoutAuth } from "@/features/queries/auth/LogoutAuth";
import React, { useState } from "react";
import { ModelConfirmation } from "../confirmationModel/AlertDialog";

export default function FloatingDockNavbar() {
  const mouseX = useMotionValue(Infinity);

  const { logout, isPending } = LogoutAuth();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [NameConfirm, setNameConfirm] = useState("");
  const [processingFn, setProcessingFn] = useState<() => void>(() => () => {});

  const ConfirmationFunction = (item: any) => {
    setNameConfirm(item.label);

    if (item.label === "Logout") {
      setProcessingFn(() => logout);
      setOpenConfirm(true);
    }

    if (item.label === "Delete") {
      setProcessingFn(() => () => alert("DELETE ACTION"));
      setOpenConfirm(true);
    }

    if (!["Logout", "Delete"].includes(item.label)) {
      setOpenConfirm(false);
    }
  };

  const LodaingHandling = (item: any) => {
    return ["Logout"].includes(item.label) ? isPending : false;
  };

  return (
    <React.Fragment>
      {openConfirm && (
        <ModelConfirmation
          open={openConfirm}
          setOpen={setOpenConfirm}
          ProcessingName={NameConfirm}
          theProcessing={processingFn}
          isPending={isPending}
        />
      )}

      <div
        className="fixed h-[3.75rem] bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 px-4 py-2 bg-[#0c0c0c] rounded-3xl shadow-xl border border-neutral-800"
        onMouseMove={(e: React.MouseEvent) => {
          mouseX.set((e as any).pageX ?? (e.nativeEvent as any).pageX);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {navItems.map((item, idx) => (
          <div key={idx}>
            <IconItem
              mouseX={mouseX}
              {...item}
              type={item.type as "link" | "action"}
              onClick={() => ConfirmationFunction(item)}
              isLoading={LodaingHandling(item)}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
