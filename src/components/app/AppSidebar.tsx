import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, LogOut, MessageSquare, Plus, Scale, User, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockConversations, mockUser } from "@/lib/mock-data";

const navItems = [
  { to: "/app", label: "Suhbat", icon: MessageSquare, exact: true },
  { to: "/app/history", label: "Suhbatlar tarixi", icon: History },
  { to: "/app/saved", label: "Saqlangan javoblar", icon: Bookmark },
  { to: "/app/profile", label: "Profil", icon: User },
] as const;

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full min-h-0 flex-col bg-navy text-foreground">
      <div className="flex h-16 items-center gap-2 px-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
          <Scale className="size-5" />
        </span>
        <span className="truncate text-lg font-semibold tracking-tight">
          Huquq<span className="text-primary">AI</span>
        </span>
      </div>

      <div className="px-3">
        <Button
          className="h-11 w-full justify-start gap-2"
          onClick={() => {
            onNavigate?.();
            navigate({ to: "/app", search: { n: Date.now() } });
          }}
        >
          <Plus className="size-4" />
          Yangi suhbat
        </Button>
      </div>

      <nav className="mt-4 grid gap-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: "exact" in item ? item.exact : false }}
            onClick={onNavigate}
            activeProps={{ className: "bg-secondary text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground"
          >
            <item.icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-6 min-h-0 flex-1 overflow-y-auto px-3 pb-4">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Oxirgi suhbatlar
        </p>
        <div className="grid gap-1">
          {mockConversations.map((c) => (
            <Link
              key={c.id}
              to="/app/history"
              onClick={onNavigate}
              className="flex min-h-11 flex-col justify-center rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="truncate">{c.title}</span>
              <span className="truncate text-xs opacity-70">{c.updatedAt}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold">
            {mockUser.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{mockUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="mt-1 h-11 w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
          onClick={() => {
            onNavigate?.();
            navigate({ to: "/login" });
          }}
        >
          <LogOut className="size-4" />
          Chiqish
        </Button>
      </div>
    </div>
  );
}
