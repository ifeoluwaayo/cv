"use client";
import { Printer } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function PrintButton() {
  const { setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme("light");
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
