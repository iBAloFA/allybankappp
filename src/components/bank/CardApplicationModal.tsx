import { useState } from "react";
import { CircleCheck, CreditCard, X } from "lucide-react";
import { toast } from "sonner";
import { CARD_OPTIONS } from "@/lib/bank-data";

type Props = { open: boolean; onClose: () => void };

export function CardApplicationModal({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [card, setCard] = useState(CARD_OPTIONS[1]!.name);
  const [ssn, setSsn] = useState("");
  const [income, setIncome] = useState("");
  const [employment, setEmployment] = useState("Employed full-time");

  if (!open) return null;

  const close = () => {
    setStep(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/55 pt-10">
      <div className="w-full max-w-md rounded-2xl bg-surface pb-6 shadow-2xl">
        <div className="flex items-center justify-between px-5 pt-5">
          <span className="flex-1 text-center text-lg font-bold text-foreground">
            Credit Card Application
          </span>
          <button onClick={close} aria-label="Close application">
            <X className="size-5 text-muted-foreground" />
          </button>
        </div>

        {step === 0 && (
          <div className="px-5 pt-5">
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="size-9 text-ally" strokeWidth={1.8} />
              <h3 className="text-lg font-bold text-foreground">Choose Your Card</h3>
              <p className="text-sm text-muted-foreground">
                Select the Ally card that fits your lifestyle
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {CARD_OPTIONS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setCard(c.name)}
                  className={`flex w-full items-center justify-between rounded-lg border bg-card px-4 py-4 text-left ${
                    card === c.name ? "border-ally ring-2 ring-ally/30" : "border-border"
                  }`}
                >
                  <span className="pr-3 text-[15px] font-medium text-foreground">{c.name}</span>
                  <span className="shrink-0 text-sm text-muted-foreground">{c.fee}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-5 w-full rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground"
            >
              Continue
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="px-5 pt-5">
            <h3 className="text-center text-base font-bold text-foreground">
              Personal Information
            </h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Demo only — nothing you type here is saved or sent anywhere
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground">
                  Social Security Number (SSN)
                </label>
                <input
                  type="password"
                  inputMode="numeric"
                  value={ssn}
                  onChange={(e) => setSsn(e.target.value.replace(/\D/g, "").slice(0, 9))}
                  className="mt-1.5 w-full rounded-lg border-2 border-ally bg-card px-4 py-3 text-foreground outline-none"
                  placeholder="•••••••••"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  This is a mock form. Do not enter a real SSN.
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Annual Income</label>
                <div className="mt-1.5 flex items-center rounded-lg border border-border bg-card px-4">
                  <span className="text-muted-foreground">$</span>
                  <input
                    inputMode="numeric"
                    value={income}
                    onChange={(e) => setIncome(e.target.value.replace(/\D/g, "").slice(0, 9))}
                    className="w-full bg-transparent py-3 pl-2 text-foreground outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Employment Status</label>
                <select
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none"
                >
                  <option>Employed full-time</option>
                  <option>Employed part-time</option>
                  <option>Self-employed</option>
                  <option>Unemployed</option>
                  <option>Retired</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(0)}
                className="flex-1 rounded-md border border-border bg-card py-3 text-sm font-semibold text-foreground"
              >
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="flex-1 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="px-5 pt-5">
            <div className="flex flex-col items-center gap-2">
              <CircleCheck className="size-10 text-success" strokeWidth={1.8} />
              <h3 className="text-lg font-bold text-foreground">Review &amp; Submit</h3>
              <p className="text-sm text-muted-foreground">Please review your application details</p>
            </div>
            <dl className="mt-5 space-y-3 rounded-lg bg-muted px-4 py-4 text-[15px]">
              <Row label="Card Type" value={card} />
              <Row label="SSN" value={ssn ? `***-**-${ssn.slice(-4)}` : "***-**-••••"} />
              <Row
                label="Annual Income"
                value={income ? `$${Number(income).toLocaleString("en-US")}` : "$0"}
              />
              <Row label="Employment" value={employment} />
            </dl>
            <div className="mt-4 rounded-lg bg-warning-surface px-4 py-4">
              <p className="text-sm font-semibold text-foreground">What happens next?</p>
              <ul className="mt-2 space-y-1 text-sm text-foreground">
                <li>• We'll perform a soft credit check</li>
                <li>• Review typically takes 1–2 business days</li>
                <li>• You'll receive a notification once approved</li>
              </ul>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-md border border-border bg-card py-3 text-sm font-semibold text-foreground"
              >
                Back
              </button>
              <button
                onClick={() => {
                  toast.success("Application submitted — review pending");
                  close();
                }}
                className="flex-1 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground"
              >
                Submit Application
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold text-foreground">{value}</dd>
    </div>
  );
}
