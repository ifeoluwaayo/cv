"use client";
import { Printer } from "lucide-react";
import { Button } from "./ui/button";

export default function PrintButton() {
  return (
    <Button
      onClick={() => {
        window.print();
      }}
      size="icon"
      className="rounded-full"
      variant="ghost"
    >
      <Printer size={18} />
    </Button>
  );
}
