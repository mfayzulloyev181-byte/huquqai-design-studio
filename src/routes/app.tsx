import { useState } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AppSidebar } from "@/components/app/AppSidebar";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Ish paneli — HuquqAI" },
      { name: "description", content: "HuquqAI ichki paneli: huquqiy AI suhbat, saqlangan javoblar va profil." },
      { property: "og:title", content: "Ish paneli — HuquqAI" },
      { property: "og:description", content: "Huquqiy AI suhbat, suhbatlar tarixi va saqlangan javoblar." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppLayout,
});

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell flex h-screen w-full overflow-hidden bg-background text-foreground">
      <aside className="hidden w-72 shrink-0 border-r border-border lg:block">
        <AppSidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-navy px-3 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-11" aria-label="Menyu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="app-shell w-[86vw] max-w-xs border-border bg-navy p-0">
              <SheetTitle className="sr-only">Menyu</SheetTitle>
              <AppSidebar onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
          <span className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Scale className="size-4" />
            </span>
            <span className="text-base font-semibold tracking-tight">
              Huquq<span className="text-primary">AI</span>
            </span>
          </span>
        </header>

        <div className="flex min-h-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
