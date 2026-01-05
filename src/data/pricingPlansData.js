export const plans = [
  {
    name: "Free",
    price: "₹0",
    yearlyPrice: "₹0",
    description: "Perfect for getting started with crypto tracking",
    features: [
      "Track top 50 cryptocurrencies",
      "Real-time price updates",
      "Basic charts & analytics",
      "Coin detail pages",
      "Responsive dashboard",
    ],
    limitations: [
      "Portfolio tracking",
      "Price alerts & notifications",
      "Ad-free experience",
      "Advanced charting tools",
    ],
  },
  {
    name: "Pro",
    price: "₹399",
    yearlyPrice: "₹3,990",
    description: "Advanced tools for serious crypto traders",
    popular: true,
    features: [
      "Track up to 500 coins",
      "Advanced charting tools",
      "Portfolio tracking with analytics",
      "Real-time price alerts",
      "Ad-free experience",
      "Priority customer support",
      "Market insights & reports",
    ],
    limitations: [
      "Unlimited coins & watchlists",
      "Export data to CSV/Excel",
      "Early access to new features",
    ],
  },
  {
    name: "Premium",
    price: "₹999",
    yearlyPrice: "₹9,990",
    description: "Everything you need for professional trading",
    features: [
      "Unlimited coins & watchlists",
      "Advanced portfolio analytics",
      "Export data to CSV/Excel",
      "Early access to new features",
      "Dedicated account manager",
      "Custom alerts & automations",
      "Tax reporting assistance",
    ],
    limitations: [],
  },
];

export const comparisonFeatures = [
  { feature: "Tracked Cryptocurrencies", values: ["50", "500", "Unlimited"] },
  { feature: "Real-time Updates", values: [true, true, true] },
  { feature: "Portfolio Tracking", values: [false, true, true] },
  { feature: "Price Alerts", values: [false, true, true] },
  { feature: "Advanced Charts", values: [false, true, true] },
  { feature: "Data Export", values: [false, false, true] },
  { feature: "API Access", values: [false, false, true] },
  { feature: "Priority Support", values: [false, true, true] },
];

export const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    q: "Is there a free trial?",
    a: "All paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, UPI, and net banking.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel your subscription anytime with no questions asked.",
  },
];
