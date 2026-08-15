export const CUSTOMER_NAME = "Daniel Wade Hayes";
export const SUPPORT_PHONE = "1-877-247-2559";

export type Account = {
  id: string;
  name: string;
  shortName: string;
  number: string;
  balance: number;
  available: number;
  type: "Spending" | "Savings";
};

export const ACCOUNTS: Account[] = [
  {
    id: "spending",
    name: "Ally Spending Account",
    shortName: "ALLY SPENDING",
    number: "•••• 4471",
    balance: 10200000.0,
    available: 10200000.0,
    type: "Spending",
  },
  {
    id: "savings",
    name: "Ally Online Savings",
    shortName: "ALLY SAVINGS",
    number: "•••• 9083",
    balance: 580062.85,
    available: 580062.85,
    type: "Savings",
  },
];

export type Txn = {
  id: number;
  label: string;
  amount: number;
  balance: number;
  time: string;
  date: string;
};

const RAW: Array<[string, number]> = [
  ["Purchase at Starbucks", -93.06],
  ["Payment from eBay", 132.28],
  ["Purchase at Uber", -120.54],
  ["Purchase at Walgreens", -184.8],
  ["Purchase at Uber", -175.81],
  ["Payment from AT&T Rebate", 103.36],
  ["Payment from Stash Invest", 16.38],
  ["Purchase at eBay", -136.87],
  ["Payment from Groupon", 141.97],
  ["Purchase at Office Depot", -212.4],
  ["Purchase at Dell", -899.99],
  ["Payment from Upwork", 1840.0],
  ["Purchase at Whole Foods", -164.22],
  ["Payment from Zelle · A. Cole", 320.0],
  ["Purchase at Delta Air Lines", -742.6],
  ["Purchase at Apple", -1299.0],
  ["Payment from Payroll · Kestrel", 5240.11],
  ["Purchase at Shell", -78.44],
  ["Purchase at Target", -246.19],
  ["Payment from Refund · Lyft", 24.75],
];

let running = 580062.85;
export const TRANSACTIONS: Txn[] = RAW.map(([label, amount], i) => {
  const balance = running;
  running = running - amount;
  return {
    id: i,
    label,
    amount,
    balance,
    date: "Jan 3, 2026",
    time: "11:23 AM",
  };
});

export const CARD_OPTIONS = [
  { name: "Ally Platinum Mastercard®", fee: "$0/yr" },
  { name: "Ally Unlimited Cash Back Mastercard®", fee: "$0/yr" },
  { name: "Ally Everyday Cash Back Mastercard®", fee: "$0/yr" },
  { name: "Ally Secured Mastercard®", fee: "$25/yr" },
];

export const RESTRICTION_BODY = `Your account has been temporarily restricted due to unusual activity detected from an unrecognized location. For your security, all outgoing transfers have been suspended. Please contact Ally Bank support via secure message or call ${SUPPORT_PHONE} for immediate assistance.`;

export const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });
