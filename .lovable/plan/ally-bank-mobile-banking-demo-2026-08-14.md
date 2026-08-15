# Ally Bank Mobile Banking Demo

Recreate the mobile banking flow from the uploaded video, rebranded from Chase to Ally Bank.

## What gets built

A mobile-first demo app (phone-width layout) with a bottom tab bar and three tabs. All state is in memory — no backend, no real money movement, no real personal data collected.

### Header
- Search field, notification bell, avatar initial
- Ally wordmark and "Hi, Emmanuel Jobs" greeting on a dark header
- Quick-action row: Set Up, Deposit, Account, Statements

### Tab 1 — Accounts
- Account cards: Ally Spending Account and Ally Online Savings with large balances (~$467,778 and ~$580,062)
- Horizontal merchant/offer tile strip
- "My Cards" section with an empty state and an "Apply for Card" button that opens the card application flow

### Tab 2 — Pay & Collect
- New Transfer form: From Account dropdown (with "Available: $..." helper), To Account Number, Amount, Description
- Submitting opens the restriction modal — transfers never complete, exactly as in the video

### Tab 3 — Transactions
- Scrollable list: merchant, date + time, signed amount (red debits / green credits), running balance per row

### Restriction modal (the centerpiece)
- Ally-purple gradient header with shield icon and close X
- Yellow-warning error code strip (e.g. `ERROR CODE: AL04957`, `ERROR CODE: TXN-RESTRICTED-001`)
- "Transfer Restricted" + "Dear Emmanuel Jobs," letter body: account temporarily restricted due to unusual activity from an unrecognized location, outgoing transfers suspended, contact Ally support at Ally's published support number
- "I Understand" (primary) and "Contact Support" (outline) buttons
- Appears on app open and on any transfer attempt, over a dimmed backdrop

### Card application flow (multi-step modal)
1. Choose Your Card — Ally Platinum Mastercard, Ally Unlimited Cash Back Mastercard, Ally Everyday Cash Back Mastercard, Ally Secured Card, each with an annual-fee label
2. Personal Information — SSN (masked input), Annual Income, Employment Status select. Marked clearly as demo-only; values are never persisted or sent anywhere
3. Review & Submit — green check, summary rows (Card Type, SSN masked to last 4, Annual Income, Employment), "What happens next?" bullets, Back / Submit Application
4. Submit shows a pending confirmation toast

### Toasts
Bottom "Welcome back!" style toast with a check icon, as in the video.

## Design

Ally brand direction: deep plum/purple primary (Ally's signature purple) with white surfaces, near-black header, and green/red for transaction signs. Clean geometric sans, generous row spacing, subtle card shadows — retail banking app feel, not a generic dashboard.

## Technical notes

- Single route at `/` (replaces the placeholder index) plus small components under `src/components/bank/`
- Tab and modal state via React `useState`; mock account/transaction data in a local module
- All colors added as semantic tokens in `src/styles.css` (Ally purple, success green, debit red, warning amber) — no hardcoded color utilities
- Sonner for the toast
- Route `head()` with a demo-specific title and description
- Static demo content only; the SSN/income fields are local component state and never leave the browser
