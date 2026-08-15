import { useEffect, useState } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import {
  ArrowRightLeft,
  Bell,
  CreditCard,
  FileText,
  PiggyBank,
  Receipt,
  Search,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { CUSTOMER_NAME } from "@/lib/bank-data";
import { RestrictionModal } from "@/components/bank/RestrictionModal";
import { CardApplicationModal } from "@/components/bank/CardApplicationModal";
import { AccountsTab, TransferTab, TransactionsTab } from "@/components/bank/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ally Bank Mobile Demo — Accounts, Transfers & Cards" },
      {
        name: "description",
        content:
          "A mock Ally Bank mobile banking interface with accounts, transaction history, transfers and a credit card application flow. Demo data only.",
      },
      { property: "og:title", content: "Ally Bank Mobile Demo" },
      {
        property: "og:description",
        content:
          "Mock mobile banking UI: accounts, transactions, restricted-transfer alert and card application flow.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: () => {
    const isLoggedIn = typeof window !== "undefined" && window.localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      throw redirect({ to: "/login" });
    }
  },
  component: Index,
});

type Tab = "accounts" | "transfer" | "transactions";

function Index() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("accounts");
  const [restriction, setRestriction] = useState<{ code: string; heading?: string } | null>(null);
  const [cardOpen, setCardOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate({ to: "/login" });
  };

  useEffect(() => {
    setRestriction({ code: "AL04957" });
    const t = setTimeout(() => toast.success("Welcome back!"), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-surface">
      <header className="bg-header px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-header-foreground/10 px-3 py-2">
            <Search className="size-4 text-header-foreground/60" />
            <span className="text-sm text-header-foreground/60">Search in the app</span>
          </div>
          <Bell className="size-5 text-header-foreground/80" />
          <button
            onClick={handleLogout}
            className="rounded-lg p-1.5 hover:bg-header-foreground/10 transition-colors"
            title="Logout"
          >
            <LogOut className="size-5 text-header-foreground/80" />
          </button>
          <div className="flex size-8 items-center justify-center rounded-full bg-ally text-sm font-bold text-ally-foreground">
            E
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <h1 className="text-2xl font-bold lowercase tracking-tight text-header-foreground">
            ally
          </h1>
          <span className="text-sm text-header-foreground/70">Hi, {CUSTOMER_NAME}</span>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {[
            { label: "Set Up", icon: PiggyBank },
            { label: "Deposit", icon: FileText },
            { label: "Account", icon: ArrowRightLeft },
            { label: "Statements", icon: Receipt },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-lg bg-header-foreground/8 py-3"
            >
              <Icon className="size-5 text-header-foreground/80" strokeWidth={1.8} />
              <span className="text-[11px] text-header-foreground/70">{label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="flex-1 pb-24">
        {tab === "accounts" && <AccountsTab onApply={() => setCardOpen(true)} />}
        {tab === "transfer" && (
          <TransferTab
            onRestrict={() =>
              setRestriction({ code: "TXN-RESTRICTED-001", heading: "Transfer Restricted" })
            }
          />
        )}
        {tab === "transactions" && <TransactionsTab />}
      </main>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-header px-2 pt-2 pb-3">
        <div className="grid grid-cols-3">
          {(
            [
              { id: "accounts", label: "Accounts", icon: CreditCard },
              { id: "transfer", label: "Pay & Collect", icon: ArrowRightLeft },
              { id: "transactions", label: "Transactions", icon: FileText },
            ] as const
          ).map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="flex flex-col items-center gap-1 py-1"
              >
                <Icon
                  className={`size-5 ${active ? "text-ally-light" : "text-header-foreground/60"}`}
                  strokeWidth={1.8}
                />
                <span
                  className={`text-[11px] ${active ? "font-semibold text-ally-light" : "text-header-foreground/60"}`}
                >
                  {label}
                </span>
                <span
                  className={`size-1 rounded-full ${active ? "bg-ally-light" : "bg-transparent"}`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      <RestrictionModal
        open={restriction !== null}
        onClose={() => setRestriction(null)}
        errorCode={restriction?.code ?? ""}
        heading={restriction?.heading}
      />
      <CardApplicationModal open={cardOpen} onClose={() => setCardOpen(false)} />
    </div>
  );
}
