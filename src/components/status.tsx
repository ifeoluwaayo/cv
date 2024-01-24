import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

export default function Status() {
  const statusColor = {
    active: "bg-lime-500",
    disabled: "bg-gray-500",
    pending: "bg-amber-500",
    blocked: "bg-red-500",
  };

  return (
    <span className="mr-4 flex items-center gap-2 px-2 text-sm">
      <span
        className={cn(
          "size-2 rounded-full",
          statusColor[RESUME_DATA.status.color],
        )}
      />
      <span>{RESUME_DATA.status.label}</span>
    </span>
  );
}
