import { Shield, TriangleAlert, X } from "lucide-react";
import { CUSTOMER_NAME, RESTRICTION_BODY, SUPPORT_PHONE } from "@/lib/bank-data";

type Props = {
  open: boolean;
  onClose: () => void;
  errorCode: string;
  heading?: string | undefined;
};

export function RestrictionModal({ open, onClose, errorCode, heading }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/55 px-0 pt-16">
      <div className="w-full max-w-md overflow-hidden rounded-b-2xl bg-card shadow-2xl">
        <div className="flex items-center justify-between bg-gradient-to-r from-ally-deep via-ally to-ally-light px-5 py-4">
          <div className="flex items-center gap-3">
            <Shield className="size-6 text-ally-foreground" strokeWidth={2.2} />
            <span className="text-lg font-bold tracking-wide text-ally-foreground">ally</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close alert"
            className="rounded p-1 text-ally-foreground/90 transition-colors hover:bg-ally-foreground/15"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 bg-warning-surface px-4 py-3">
          <TriangleAlert className="size-4 text-warning" />
          <span className="text-sm font-semibold text-foreground">ERROR CODE: {errorCode}</span>
        </div>

        <div className="space-y-4 px-6 py-6">
          {heading ? <h2 className="text-lg font-bold text-foreground">{heading}</h2> : null}
          <p className="font-semibold text-foreground">Dear {CUSTOMER_NAME},</p>
          <p className="text-[15px] leading-relaxed text-foreground">{RESTRICTION_BODY}</p>
          <p className="text-sm text-muted-foreground">
            For immediate assistance, call:{" "}
            <span className="font-semibold text-foreground">{SUPPORT_PHONE}</span>
          </p>

          <div className="space-y-3 pt-2">
            <button
              onClick={onClose}
              className="w-full rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground"
            >
              I Understand
            </button>
            <button
              onClick={onClose}
              className="w-full rounded-md border border-border bg-background py-3 text-sm font-semibold text-foreground"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
