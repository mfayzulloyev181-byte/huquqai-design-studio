import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockStats, mockUser } from "@/lib/mock-data";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Profil</h1>
        <p className="mt-2 text-sm text-muted-foreground">Hisob ma'lumotlari va sozlamalar.</p>

        <section className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-4">
          <span className="grid size-14 place-items-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
            {mockUser.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold">{mockUser.name}</p>
            <p className="truncate text-sm text-muted-foreground">{mockUser.email}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {mockUser.plan} · {mockUser.joined}dan beri
            </p>
          </div>
        </section>

        <section className="mt-4 grid gap-3 sm:grid-cols-2">
          {mockStats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-2xl font-semibold text-primary">{s.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-4 rounded-xl border border-border bg-card p-4">
          <h2 className="text-sm font-semibold">Shaxsiy ma'lumotlar</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">To'liq ism</Label>
              <Input id="name" defaultValue={mockUser.name} className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Elektron pochta</Label>
              <Input id="email" type="email" inputMode="email" defaultValue={mockUser.email} className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" type="tel" inputMode="tel" placeholder="+998 90 123 45 67" className="h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="org">Tashkilot</Label>
              <Input id="org" placeholder="MCHJ yoki YATT nomi" className="h-11" />
            </div>
          </div>
          <Button className="mt-4 h-11">Saqlash</Button>
        </section>

        <Button
          variant="outline"
          className="mt-4 h-11 gap-2"
          onClick={() => navigate({ to: "/login" })}
        >
          <LogOut className="size-4" />
          Chiqish
        </Button>
      </div>
    </div>
  );
}
