import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  Box,
  CreditCard,
  Package,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { ACCOUNTS, TRANSACTIONS, money } from "@/lib/bank-data";

export function AccountsTab({ onApply }: { onApply: () => void }) {
  return (
    <div className="space-y-6 px-4 py-5">
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          My accounts
        </h2>
        {ACCOUNTS.map((a) => (
          <div
            key={a.id}
            className="rounded-xl border border-border bg-card p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground">{a.name}</p>
                <p className="text-sm text-muted-foreground">{a.number}</p>
              </div>
              <span className="rounded-full bg-ally/10 px-2.5 py-1 text-xs font-semibold text-ally">
                {a.type}
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              {money(a.balance)}
            </p>
            <p className="text-sm text-muted-foreground">Available {money(a.available)}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Card offers
        </h2>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
          {[
            { label: "Cards", icon: CreditCard },
            { label: "Office Depot", icon: Package },
            { label: "Best Buy", icon: Box },
            { label: "Dell", icon: ShoppingBag },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex h-24 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card"
            >
              <Icon className="size-6 text-ally" strokeWidth={1.8} />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-header p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="size-6 text-header-foreground" strokeWidth={1.8} />
            <span className="text-lg font-bold text-header-foreground">My Cards</span>
          </div>
          <button
            onClick={onApply}
            className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-ally-deep to-ally-light px-3 py-2 text-sm font-semibold text-ally-foreground"
          >
            <Plus className="size-4" /> Apply for Card
          </button>
        </div>
        <p className="mt-6 mb-2 text-center text-header-foreground/70">No cards yet</p>
      </section>
    </div>
  );
}

export function TransferTab({ onRestrict }: { onRestrict: () => void }) {
  const [from, setFrom] = useState(ACCOUNTS[0]!.id);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const account = ACCOUNTS.find((a) => a.id === from)!;

  return (
    <div className="px-4 py-5">
      <h2 className="text-2xl font-bold text-foreground">New Transfer</h2>
      <div className="mt-5 space-y-5">
        <div>
          <label className="text-sm font-semibold text-foreground">From Account</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground outline-none"
          >
            {ACCOUNTS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.shortName} — {money(a.balance)}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-muted-foreground">
            Available: {money(account.available)}
          </p>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground">To Account Number</label>
          <input
            inputMode="numeric"
            value={to}
            onChange={(e) => setTo(e.target.value.replace(/\D/g, "").slice(0, 12))}
            placeholder="Enter account number"
            className="mt-1.5 w-full rounded-lg border-2 border-ally bg-card px-4 py-3 text-foreground outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground">Amount</label>
          <div className="mt-1.5 flex items-center rounded-lg border border-border bg-muted px-4">
            <span className="text-muted-foreground">$</span>
            <input
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder="0.00"
              className="w-full bg-transparent py-3 pl-2 text-foreground outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground">Description (Optional)</label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="What's this transfer for?"
            className="mt-1.5 w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground outline-none"
          />
        </div>

        <button
          onClick={onRestrict}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3.5 text-sm font-semibold text-ally-foreground"
        >
          Transfer <ArrowRightLeft className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function TransactionsTab() {
  return (
    <div className="px-4 py-5">
      <h2 className="mb-3 text-2xl font-bold text-foreground">Transactions</h2>
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {TRANSACTIONS.map((t) => {
          const credit = t.amount > 0;
          return (
            <div key={t.id} className="flex items-center gap-3 px-4 py-3.5">
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                  credit ? "bg-success/12" : "bg-muted"
                }`}
              >
                {credit ? (
                  <ArrowDownLeft className="size-4 text-success" />
                ) : (
                  <ShoppingBag className="size-4 text-muted-foreground" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground">
                  {t.date} • {t.time}
                </p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${credit ? "text-success" : "text-debit"}`}>
                  {credit ? "+" : "-"}
                  {money(Math.abs(t.amount))}
                </p>
                <p className="text-xs text-muted-foreground">Bal: {money(t.balance)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
