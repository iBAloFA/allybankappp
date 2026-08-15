import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Box, a as Search, b as ArrowDownLeft, c as PiggyBank, d as LogOut, f as FileText, g as CircleCheck, h as CreditCard, i as Shield, n as TriangleAlert, o as Receipt, r as ShoppingBag, s as Plus, t as X, u as Package, v as Bell, y as ArrowRightLeft } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CdJ4jhSK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CUSTOMER_NAME = "Daniel Wade Hayes";
var SUPPORT_PHONE = "1-877-247-2559";
var ACCOUNTS = [{
	id: "spending",
	name: "Ally Spending Account",
	shortName: "ALLY SPENDING",
	number: "•••• 4471",
	balance: 102e5,
	available: 102e5,
	type: "Spending"
}, {
	id: "savings",
	name: "Ally Online Savings",
	shortName: "ALLY SAVINGS",
	number: "•••• 9083",
	balance: 580062.85,
	available: 580062.85,
	type: "Savings"
}];
var RAW = [
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
	["Payment from Upwork", 1840],
	["Purchase at Whole Foods", -164.22],
	["Payment from Zelle · A. Cole", 320],
	["Purchase at Delta Air Lines", -742.6],
	["Purchase at Apple", -1299],
	["Payment from Payroll · Kestrel", 5240.11],
	["Purchase at Shell", -78.44],
	["Purchase at Target", -246.19],
	["Payment from Refund · Lyft", 24.75]
];
var running = 580062.85;
var TRANSACTIONS = RAW.map(([label, amount], i) => {
	const balance = running;
	running = running - amount;
	return {
		id: i,
		label,
		amount,
		balance,
		date: "Jan 3, 2026",
		time: "11:23 AM"
	};
});
var CARD_OPTIONS = [
	{
		name: "Ally Platinum Mastercard®",
		fee: "$0/yr"
	},
	{
		name: "Ally Unlimited Cash Back Mastercard®",
		fee: "$0/yr"
	},
	{
		name: "Ally Everyday Cash Back Mastercard®",
		fee: "$0/yr"
	},
	{
		name: "Ally Secured Mastercard®",
		fee: "$25/yr"
	}
];
var RESTRICTION_BODY = `Your account has been temporarily restricted due to unusual activity detected from an unrecognized location. For your security, all outgoing transfers have been suspended. Please contact Ally Bank support via secure message or call ${SUPPORT_PHONE} for immediate assistance.`;
var money = (n) => n.toLocaleString("en-US", {
	style: "currency",
	currency: "USD"
});
function RestrictionModal({ open, onClose, errorCode, heading }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-foreground/55 px-0 pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md overflow-hidden rounded-b-2xl bg-card shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-gradient-to-r from-ally-deep via-ally to-ally-light px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-6 text-ally-foreground",
							strokeWidth: 2.2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold tracking-wide text-ally-foreground",
							children: "ally"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "Close alert",
						className: "rounded p-1 text-ally-foreground/90 transition-colors hover:bg-ally-foreground/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 bg-warning-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-warning" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-semibold text-foreground",
						children: ["ERROR CODE: ", errorCode]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 px-6 py-6",
					children: [
						heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-foreground",
							children: heading
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-foreground",
							children: [
								"Dear ",
								CUSTOMER_NAME,
								","
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-relaxed text-foreground",
							children: RESTRICTION_BODY
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"For immediate assistance, call:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: SUPPORT_PHONE
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onClose,
								className: "w-full rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground",
								children: "I Understand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onClose,
								className: "w-full rounded-md border border-border bg-background py-3 text-sm font-semibold text-foreground",
								children: "Contact Support"
							})]
						})
					]
				})
			]
		})
	});
}
function CardApplicationModal({ open, onClose }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [card, setCard] = (0, import_react.useState)(CARD_OPTIONS[1].name);
	const [ssn, setSsn] = (0, import_react.useState)("");
	const [income, setIncome] = (0, import_react.useState)("");
	const [employment, setEmployment] = (0, import_react.useState)("Employed full-time");
	if (!open) return null;
	const close = () => {
		setStep(0);
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-foreground/55 pt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl bg-surface pb-6 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-center text-lg font-bold text-foreground",
						children: "Credit Card Application"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: close,
						"aria-label": "Close application",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-muted-foreground" })
					})]
				}),
				step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
									className: "size-9 text-ally",
									strokeWidth: 1.8
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-foreground",
									children: "Choose Your Card"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Select the Ally card that fits your lifestyle"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-3",
							children: CARD_OPTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCard(c.name),
								className: `flex w-full items-center justify-between rounded-lg border bg-card px-4 py-4 text-left ${card === c.name ? "border-ally ring-2 ring-ally/30" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pr-3 text-[15px] font-medium text-foreground",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-sm text-muted-foreground",
									children: c.fee
								})]
							}, c.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStep(1),
							className: "mt-5 w-full rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground",
							children: "Continue"
						})
					]
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-center text-base font-bold text-foreground",
							children: "Personal Information"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-center text-sm text-muted-foreground",
							children: "Demo only — nothing you type here is saved or sent anywhere"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-semibold text-foreground",
										children: "Social Security Number (SSN)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										inputMode: "numeric",
										value: ssn,
										onChange: (e) => setSsn(e.target.value.replace(/\D/g, "").slice(0, 9)),
										className: "mt-1.5 w-full rounded-lg border-2 border-ally bg-card px-4 py-3 text-foreground outline-none",
										placeholder: "•••••••••"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "This is a mock form. Do not enter a real SSN."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Annual Income"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1.5 flex items-center rounded-lg border border-border bg-card px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "$"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										inputMode: "numeric",
										value: income,
										onChange: (e) => setIncome(e.target.value.replace(/\D/g, "").slice(0, 9)),
										className: "w-full bg-transparent py-3 pl-2 text-foreground outline-none",
										placeholder: "0"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Employment Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: employment,
									onChange: (e) => setEmployment(e.target.value),
									className: "mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Employed full-time" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Employed part-time" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Self-employed" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Unemployed" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Retired" })
									]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStep(0),
								className: "flex-1 rounded-md border border-border bg-card py-3 text-sm font-semibold text-foreground",
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStep(2),
								className: "flex-1 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground",
								children: "Continue"
							})]
						})
					]
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-10 text-success",
									strokeWidth: 1.8
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-foreground",
									children: "Review & Submit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Please review your application details"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 space-y-3 rounded-lg bg-muted px-4 py-4 text-[15px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Card Type",
									value: card
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "SSN",
									value: ssn ? `***-**-${ssn.slice(-4)}` : "***-**-••••"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Annual Income",
									value: income ? `$${Number(income).toLocaleString("en-US")}` : "$0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Employment",
									value: employment
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-lg bg-warning-surface px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: "What happens next?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2 space-y-1 text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• We'll perform a soft credit check" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Review typically takes 1–2 business days" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• You'll receive a notification once approved" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStep(1),
								className: "flex-1 rounded-md border border-border bg-card py-3 text-sm font-semibold text-foreground",
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									toast.success("Application submitted — review pending");
									close();
								},
								className: "flex-1 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3 text-sm font-semibold text-ally-foreground",
								children: "Submit Application"
							})]
						})
					]
				})
			]
		})
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right font-semibold text-foreground",
			children: value
		})]
	});
}
function AccountsTab({ onApply }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold uppercase tracking-wide text-muted-foreground",
					children: "My accounts"
				}), ACCOUNTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-foreground",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: a.number
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-ally/10 px-2.5 py-1 text-xs font-semibold text-ally",
								children: a.type
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-3xl font-bold tracking-tight text-foreground",
							children: money(a.balance)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: ["Available ", money(a.available)]
						})
					]
				}, a.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground",
				children: "Card offers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 flex gap-3 overflow-x-auto px-4 pb-2",
				children: [
					{
						label: "Cards",
						icon: CreditCard
					},
					{
						label: "Office Depot",
						icon: Package
					},
					{
						label: "Best Buy",
						icon: Box
					},
					{
						label: "Dell",
						icon: ShoppingBag
					}
				].map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-24 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-6 text-ally",
						strokeWidth: 1.8
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: label
					})]
				}, label))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-header p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
							className: "size-6 text-header-foreground",
							strokeWidth: 1.8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold text-header-foreground",
							children: "My Cards"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onApply,
						className: "flex items-center gap-1.5 rounded-md bg-gradient-to-r from-ally-deep to-ally-light px-3 py-2 text-sm font-semibold text-ally-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Apply for Card"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 mb-2 text-center text-header-foreground/70",
					children: "No cards yet"
				})]
			})
		]
	});
}
function TransferTab({ onRestrict }) {
	const [from, setFrom] = (0, import_react.useState)(ACCOUNTS[0].id);
	const [to, setTo] = (0, import_react.useState)("");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [desc, setDesc] = (0, import_react.useState)("");
	const account = ACCOUNTS.find((a) => a.id === from);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground",
			children: "New Transfer"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-semibold text-foreground",
						children: "From Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: from,
						onChange: (e) => setFrom(e.target.value),
						className: "mt-1.5 w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground outline-none",
						children: ACCOUNTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: a.id,
							children: [
								a.shortName,
								" — ",
								money(a.balance)
							]
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: ["Available: ", money(account.available)]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-semibold text-foreground",
					children: "To Account Number"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "numeric",
					value: to,
					onChange: (e) => setTo(e.target.value.replace(/\D/g, "").slice(0, 12)),
					placeholder: "Enter account number",
					className: "mt-1.5 w-full rounded-lg border-2 border-ally bg-card px-4 py-3 text-foreground outline-none"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-semibold text-foreground",
					children: "Amount"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1.5 flex items-center rounded-lg border border-border bg-muted px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "decimal",
						value: amount,
						onChange: (e) => setAmount(e.target.value.replace(/[^\d.]/g, "")),
						placeholder: "0.00",
						className: "w-full bg-transparent py-3 pl-2 text-foreground outline-none"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-semibold text-foreground",
					children: "Description (Optional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: desc,
					onChange: (e) => setDesc(e.target.value),
					placeholder: "What's this transfer for?",
					className: "mt-1.5 w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground outline-none"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onRestrict,
					className: "flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-ally-deep to-ally-light py-3.5 text-sm font-semibold text-ally-foreground",
					children: ["Transfer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, { className: "size-4" })]
				})
			]
		})]
	});
}
function TransactionsTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 text-2xl font-bold text-foreground",
			children: "Transactions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
			children: TRANSACTIONS.map((t) => {
				const credit = t.amount > 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-4 py-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex size-9 shrink-0 items-center justify-center rounded-full ${credit ? "bg-success/12" : "bg-muted"}`,
							children: credit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium text-foreground",
								children: t.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									t.date,
									" • ",
									t.time
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `font-semibold ${credit ? "text-success" : "text-debit"}`,
								children: [credit ? "+" : "-", money(Math.abs(t.amount))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Bal: ", money(t.balance)]
							})]
						})
					]
				}, t.id);
			})
		})]
	});
}
function Index() {
	const navigate = useNavigate();
	const [tab, setTab] = (0, import_react.useState)("accounts");
	const [restriction, setRestriction] = (0, import_react.useState)(null);
	const [cardOpen, setCardOpen] = (0, import_react.useState)(false);
	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("userEmail");
		navigate({ to: "/login" });
	};
	(0, import_react.useEffect)(() => {
		setRestriction({ code: "AL04957" });
		const t = setTimeout(() => toast.success("Welcome back!"), 900);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-screen max-w-md flex-col bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "bg-header px-4 pt-4 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 items-center gap-2 rounded-full bg-header-foreground/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-header-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-header-foreground/60",
									children: "Search in the app"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5 text-header-foreground/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleLogout,
								className: "rounded-lg p-1.5 hover:bg-header-foreground/10 transition-colors",
								title: "Logout",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-5 text-header-foreground/80" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-8 items-center justify-center rounded-full bg-ally text-sm font-bold text-ally-foreground",
								children: "E"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold lowercase tracking-tight text-header-foreground",
							children: "ally"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-header-foreground/70",
							children: ["Hi, ", CUSTOMER_NAME]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 gap-2",
						children: [
							{
								label: "Set Up",
								icon: PiggyBank
							},
							{
								label: "Deposit",
								icon: FileText
							},
							{
								label: "Account",
								icon: ArrowRightLeft
							},
							{
								label: "Statements",
								icon: Receipt
							}
						].map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1.5 rounded-lg bg-header-foreground/8 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5 text-header-foreground/80",
								strokeWidth: 1.8
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-header-foreground/70",
								children: label
							})]
						}, label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 pb-24",
				children: [
					tab === "accounts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountsTab, { onApply: () => setCardOpen(true) }),
					tab === "transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransferTab, { onRestrict: () => setRestriction({
						code: "TXN-RESTRICTED-001",
						heading: "Transfer Restricted"
					}) }),
					tab === "transactions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionsTab, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-header px-2 pt-2 pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3",
					children: [
						{
							id: "accounts",
							label: "Accounts",
							icon: CreditCard
						},
						{
							id: "transfer",
							label: "Pay & Collect",
							icon: ArrowRightLeft
						},
						{
							id: "transactions",
							label: "Transactions",
							icon: FileText
						}
					].map(({ id, label, icon: Icon }) => {
						const active = tab === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(id),
							className: "flex flex-col items-center gap-1 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: `size-5 ${active ? "text-ally-light" : "text-header-foreground/60"}`,
									strokeWidth: 1.8
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] ${active ? "font-semibold text-ally-light" : "text-header-foreground/60"}`,
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1 rounded-full ${active ? "bg-ally-light" : "bg-transparent"}` })
							]
						}, id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestrictionModal, {
				open: restriction !== null,
				onClose: () => setRestriction(null),
				errorCode: restriction?.code ?? "",
				heading: restriction?.heading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardApplicationModal, {
				open: cardOpen,
				onClose: () => setCardOpen(false)
			})
		]
	});
}
//#endregion
export { Index as component };
