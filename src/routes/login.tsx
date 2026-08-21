import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Kirish — HuquqAI" },
      { name: "description", content: "HuquqAI hisobingizga kiring yoki ro'yxatdan o'ting." },
      { property: "og:title", content: "Kirish — HuquqAI" },
      { property: "og:description", content: "HuquqAI hisobingizga kiring yoki ro'yxatdan o'ting." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/app", search: { n: 0 } }), 900);
  };

  return (
    <div className="app-shell flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <Scale className="size-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight">
            Huquq<span className="text-primary">AI</span>
          </span>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-secondary p-1">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`h-11 rounded-md text-sm font-medium transition-colors ${
                  mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {m === "login" ? "Kirish" : "Ro'yxatdan o'tish"}
              </button>
            ))}
          </div>

          <form className="mt-6 grid gap-4" onSubmit={submit}>
            {mode === "register" ? (
              <div className="grid gap-2">
                <Label htmlFor="fullname">To'liq ism</Label>
                <Input id="fullname" className="h-11" placeholder="Ism Familiya" required />
              </div>
            ) : null}
            <div className="grid gap-2">
              <Label htmlFor="login-email">Elektron pochta</Label>
              <Input
                id="login-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="h-11"
                placeholder="ism@example.uz"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="login-password">Parol</Label>
              <Input
                id="login-password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                className="h-11"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="h-11 w-full gap-2" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin" /> : null}
              {mode === "login" ? "Kirish" : "Hisob yaratish"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Demo rejim: ma'lumotlar saqlanmaydi, har qanday qiymat bilan ish paneliga o'tasiz.
        </p>
      </div>
    </div>
  );
}
