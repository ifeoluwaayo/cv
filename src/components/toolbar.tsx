import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "./ui/button";
import Status from "./status";
import { Separator } from "./ui/separator";
import { LocaleToggle } from "./locale-toggle";
import PrintButton from "./print-button";
import { ModeToggle } from "./mode-toggle";

export function ToolBar() {
  return (
    <div className="fixed bottom-8 left-1/2 flex w-max -translate-x-1/2 items-center rounded-full border bg-muted/10 p-2 shadow-lg backdrop-blur *:shrink-0">
      <Status />
      <div className="flex items-center">
        {RESUME_DATA.contact.social.map((social) => (
          <Button
            key={social.name}
            className="rounded-full"
            variant="ghost"
            size="icon"
            asChild
          >
            <a href={social.url}>
              <social.icon className="size-5" />
              <span className="sr-only">{social.name}</span>
            </a>
          </Button>
        ))}
      </div>
      <div className="hidden lg:contents">
        <Separator orientation="vertical" className="mx-2 h-8" />
        <LocaleToggle />
        <ModeToggle />
        <PrintButton />
      </div>
    </div>
  );
}
