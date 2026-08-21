import { Link } from "@tanstack/react-router";
import { mockConversations, mockStats, mockUser } from "@/lib/mock-data";

export function RightRail() {
  return (
    <aside className="hidden w-80 shrink-0 flex-col gap-4 overflow-y-auto border-l border-border bg-navy p-4 xl:flex">
      <section className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {mockUser.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{mockUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">{mockUser.plan}</p>
          </div>
        </div>
        <Link
          to="/app/profile"
          className="mt-4 flex h-11 items-center justify-center rounded-md border border-border text-sm font-medium transition-colors hover:bg-secondary"
        >
          Profilni ko'rish
        </Link>
      </section>

      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-semibold">Hisob statistikasi</h2>
        <dl className="mt-3 grid grid-cols-2 gap-3">
          {mockStats.map((s) => (
            <div key={s.label} className="rounded-lg bg-secondary/60 p-3">
              <dt className="text-xs text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-primary">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-sm font-semibold">Oxirgi suhbatlar</h2>
        <div className="mt-3 grid gap-2">
          {mockConversations.slice(0, 4).map((c) => (
            <Link
              key={c.id}
              to="/app/history"
              className="rounded-lg border border-border px-3 py-2 transition-colors hover:bg-secondary"
            >
              <p className="truncate text-sm font-medium">{c.title}</p>
              <p className="truncate text-xs text-muted-foreground">{c.preview}</p>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
