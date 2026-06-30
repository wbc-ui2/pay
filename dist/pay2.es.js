function l(e, t, i, o, h, m, y, f) {
  var c = typeof e == "function" ? e.options : e;
  return {
    exports: e,
    options: c
  };
}
const r = [
  {
    id: "stripe-checkout",
    label: "Stripe",
    description: "Card payments (one-time or subscription). Recommended for serious commercial support. Apple Pay and Google Pay are offered through this checkout.",
    icon: "mdi-credit-card-outline",
    url: "https://checkout.stripe.com/c/pay/TODO",
    // TODO: replace once Stripe payment-link is created (sub-task #15.1)
    kind: "commercial",
    requirements: ["Any major credit/debit card", "Optional: Apple Pay or Google Pay wallet"],
    steps: [
      "Click the Stripe tile to open the secure checkout in a new tab.",
      "Pick an amount (preset options or custom).",
      'Enter card details OR tap "Pay with Apple Pay" / "Pay with Google Pay" if your device supports it.',
      "Confirm — Stripe handles the rest. A receipt arrives by email."
    ]
  },
  {
    id: "paypal",
    label: "PayPal",
    description: "One-tap support via PayPal — works in most countries.",
    icon: "mdi-currency-usd",
    url: "https://paypal.me/wbc-ui",
    // TODO: replace once paypal.me handle is claimed (sub-task #15.2)
    kind: "tip",
    requirements: ["A PayPal account (personal or business)", "OR a card — PayPal Guest Checkout works in supported regions"],
    steps: [
      "Click the PayPal tile.",
      "Enter the amount you want to send.",
      "Sign in to PayPal OR use Guest Checkout with a card.",
      "Confirm the payment."
    ]
  },
  {
    id: "buy-me-a-coffee",
    label: "Buy Me a Coffee",
    description: "Casual tip jar — perfect for thanking the project with a small amount.",
    icon: "mdi-coffee-outline",
    url: "https://buymeacoffee.com/wbc-ui",
    // TODO: replace once buymeacoffee.com page is created (sub-task #15.6)
    kind: "tip",
    requirements: ["Any card OR an existing Buy Me a Coffee account"],
    steps: [
      "Click the Buy Me a Coffee tile.",
      "Pick a coffee tier (1, 3, 5 coffees) or enter a custom amount.",
      "Add an optional public message.",
      "Pay with card — Apple Pay / Google Pay also accepted on supported devices."
    ]
  },
  {
    id: "github-sponsors",
    label: "GitHub Sponsors",
    description: "Recurring monthly sponsorship — best for ongoing supporters.",
    icon: "mdi-github",
    url: "https://github.com/sponsors/wissem",
    // TODO: replace once GitHub Sponsors profile is set up (sub-task #15.7)
    kind: "subscription",
    requirements: ["A GitHub account", "A card on file in your GitHub billing settings"],
    steps: [
      "Click the GitHub Sponsors tile.",
      "Sign in to GitHub.",
      "Pick a monthly sponsorship tier (or enter a custom amount).",
      "Confirm — GitHub charges your card monthly until you cancel."
    ]
  },
  {
    id: "bank-wire",
    label: "Bank Wire",
    description: "For larger amounts or invoiced support — reply to the email for routing details.",
    icon: "mdi-bank-outline",
    url: "mailto:contact@wbc-ui2.com?subject=Bank-wire support",
    kind: "commercial",
    requirements: ["Email client", "Your bank can send international wires (or use SEPA/ACH if in supported region)"],
    steps: [
      "Click the Bank Wire tile — it opens an email draft.",
      "Reply with the amount, currency, and your timezone.",
      "You'll receive IBAN / SWIFT / ACH routing details by reply within one business day.",
      "Initiate the wire from your bank; share the proof-of-payment to receive a receipt."
    ]
  },
  {
    id: "commercial-inquiry",
    label: "Commercial Inquiry",
    description: "Hiring, consulting, custom integrations — direct line to the maintainer.",
    icon: "mdi-briefcase-outline",
    url: "mailto:contact@wbc-ui2.com?subject=Commercial inquiry",
    kind: "commercial",
    requirements: ["Email client", "A rough idea of scope and timeline"],
    steps: [
      "Click the Commercial Inquiry tile — opens an email draft.",
      "Briefly describe the work (integration, custom feature, audit, training).",
      "Include rough budget + timeline if you have them.",
      "Expect a reply within 1–2 business days with next steps."
    ]
  },
  {
    id: "wise",
    label: "Wise",
    description: "Low-fee international transfers at true mid-market exchange rate. Best for cross-border support.",
    icon: "mdi-earth",
    url: "https://wise.com/pay/me/wbc-ui",
    // TODO: replace once Wise Payment Link is created (sub-task #15.3)
    kind: "commercial",
    requirements: ["A Wise account (personal or business) OR a card", "Supported in 80+ countries"],
    steps: [
      "Click the Wise tile.",
      "Enter the amount in your local currency — Wise shows the live exchange rate.",
      "Pay by bank transfer, card, or Apple/Google Pay (varies by country).",
      "Funds arrive in the recipient currency, typically within hours."
    ]
  },
  {
    id: "payoneer",
    label: "Payoneer",
    description: "For invoiced commercial support — virtual local bank accounts in USD/EUR/GBP. Best for client-style invoicing.",
    icon: "mdi-account-cash-outline",
    url: "https://payoneer.com/payment-request/wbc-ui",
    // TODO: replace once Payoneer Payment Request URL is generated (sub-task #15.4)
    kind: "commercial",
    requirements: ["A Payoneer account (free) OR ability to send ACH/SEPA/Faster Payments to a virtual account"],
    steps: [
      "Click the Payoneer tile.",
      "Enter invoice amount + reference.",
      "Pay from your Payoneer balance OR send via your local bank to the virtual account.",
      "The transfer settles in 1–3 business days; you receive a Payoneer receipt."
    ]
  },
  {
    id: "skrill",
    label: "Skrill",
    description: "Niche option for users who already have Skrill balances — common in EU/MENA and gaming/forex communities.",
    icon: "mdi-wallet-outline",
    url: "https://skrill.com/pay/wbc-ui",
    // TODO: replace once Skrill Quick Checkout URL is created (sub-task #15.5)
    kind: "tip",
    requirements: ["A Skrill account", "Funded Skrill balance OR linked card"],
    steps: [
      "Click the Skrill tile.",
      "Sign in to Skrill.",
      "Enter the amount + optional note.",
      "Confirm — funds transfer instantly from your Skrill balance."
    ]
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    description: "One-tap pay with Touch ID / Face ID. Offered via Stripe — click here to open Stripe checkout and select Apple Pay.",
    icon: "mdi-apple",
    url: "https://checkout.stripe.com/c/pay/TODO",
    // shares the Stripe URL — via Stripe checkout (sub-task #15.1)
    kind: "tip",
    requirements: ["Apple device (iPhone / iPad / Mac) with Apple Pay set up", "Safari browser (or any browser on iOS)"],
    steps: [
      "Click the Apple Pay tile to open Stripe checkout.",
      "On the checkout page, look for the Apple Pay button (appears on supported devices).",
      "Authenticate with Touch ID / Face ID / passcode.",
      "Done — receipt arrives by email."
    ]
  },
  {
    id: "google-pay",
    label: "Google Pay",
    description: "One-tap pay with your Google account. Offered via Stripe — click here to open Stripe checkout and select Google Pay.",
    icon: "mdi-google",
    url: "https://checkout.stripe.com/c/pay/TODO",
    // shares the Stripe URL — via Stripe checkout (sub-task #15.1)
    kind: "tip",
    requirements: ["Google account with Google Pay set up", "Chrome (or any browser on Android)"],
    steps: [
      "Click the Google Pay tile to open Stripe checkout.",
      "On the checkout page, look for the Google Pay button (appears on supported devices).",
      "Authenticate with Google.",
      "Done — receipt arrives by email."
    ]
  },
  {
    id: "crypto-btc",
    label: "Bitcoin",
    description: "Direct on-chain BTC. Best for medium-to-large amounts; fees vary with network congestion.",
    icon: "mdi-bitcoin",
    url: "",
    // crypto tiles have no outbound URL — head opens the expansion instead
    kind: "tip",
    address: { network: "Bitcoin mainnet", addr: "bc1qTODOreplaceWithRealBech32Address", format: "bech32" },
    // TODO: replace once #18.1 wallet-address is generated
    requirements: ["Any Bitcoin wallet (hardware preferred)", "Knowledge of the recipient network (mainnet, NOT testnet)"],
    steps: [
      "Open your Bitcoin wallet (Ledger, Trezor, Sparrow, Electrum, mobile wallets…).",
      "Make sure you are on Bitcoin mainnet — NOT testnet.",
      "Paste or scan the address below; double-check the first 6 + last 4 characters match.",
      "Pick a low or medium fee — Bitcoin is slow but final.",
      "Confirm. One confirmation typically arrives within ~10 minutes."
    ]
  },
  {
    id: "crypto-eth",
    label: "Ethereum",
    description: "Direct on-chain ETH on Ethereum mainnet. Use for ETH only — do not send Polygon/Arbitrum tokens here.",
    icon: "mdi-ethereum",
    url: "",
    kind: "tip",
    address: { network: "Ethereum mainnet", addr: "0xTODOreplaceWithReal42CharEVMAddress0000", format: "evm-hex" },
    // TODO: replace once #18.2 wallet-address is generated
    requirements: ["Any Ethereum wallet (MetaMask, Rabby, hardware wallet)", "ETH for gas (the sender pays gas, not the recipient)"],
    steps: [
      "Open your Ethereum wallet.",
      "Switch the network to Ethereum mainnet (NOT Arbitrum, Optimism, Polygon, or BSC — those would send funds to a wrong-chain address).",
      "Paste the address below; verify the checksum (first 6 + last 4 chars match).",
      "Pick a reasonable gas tier — high gas only if you need fast confirmation.",
      "Confirm. Funds typically arrive within 1–3 minutes after one block."
    ]
  },
  {
    id: "crypto-usdc",
    label: "USDC",
    description: "Stablecoin (1 USDC ≈ $1). Available on Ethereum mainnet AND Polygon — Polygon has fees ~$0.01, Ethereum has fees ~$2–10.",
    icon: "mdi-currency-usd-circle-outline",
    url: "",
    kind: "commercial",
    address: {
      networks: [
        { network: "Polygon", addr: "0xTODOreplaceWithRealPolygonAddress0000000", format: "evm-hex", note: "recommended — fees ~$0.01" },
        { network: "Ethereum mainnet", addr: "0xTODOreplaceWithRealEthMainnetAddress000", format: "evm-hex", note: "use only if your wallet does not support Polygon — fees ~$2–10" }
      ]
    },
    // TODO: replace once #18.3 USDC multi-chain addresses are generated
    requirements: ["An EVM wallet with USDC balance (MetaMask, Rabby, hardware)", "Native gas token on the chosen network (MATIC on Polygon, ETH on mainnet)"],
    steps: [
      "Open your wallet and select USDC.",
      "Pick a network — Polygon for cheap transfers, Ethereum mainnet only if Polygon is not an option.",
      "Copy the correct address below for the network you selected. **Do NOT mix networks.**",
      "Paste, double-check first 6 + last 4 chars, confirm.",
      "Polygon confirmations are typically ~5 seconds; Ethereum mainnet ~1–3 minutes."
    ]
  },
  {
    id: "crypto-sol",
    label: "Solana",
    description: "Direct on-chain SOL. Near-instant confirmations and fees under $0.001 — the most user-friendly chain for tipping.",
    icon: "mdi-flash",
    url: "",
    kind: "tip",
    address: { network: "Solana mainnet-beta", addr: "TODOreplaceWithReal44CharBase58SolanaAddress", format: "base58" },
    // TODO: replace once #18.4 wallet-address is generated
    requirements: ["A Solana wallet (Phantom, Solflare, Backpack, hardware)"],
    steps: [
      "Open your Solana wallet.",
      "Paste the address below; verify first 6 + last 4 chars match.",
      "Send — fees are ~$0.0001 and confirmation is near-instant."
    ]
  },
  {
    id: "crypto-lightning",
    label: "Bitcoin (Lightning)",
    description: "Lightning Network for Bitcoin — instant, near-zero fees. The right answer for sub-$5 tips (mainnet BTC is uneconomical at that size).",
    icon: "mdi-flash-outline",
    url: "",
    kind: "tip",
    address: { network: "Bitcoin Lightning", addr: "wbc-ui@TODOreplaceWithRealLightningProvider", format: "lightning-address", note: "works like an email — paste anywhere a Lightning address is accepted" },
    // TODO: replace once #18.5 Lightning address is generated
    requirements: ["Any Lightning wallet (Wallet of Satoshi, Phoenix, Strike, Cash App, Zeus, etc.)"],
    steps: [
      "Open your Lightning wallet.",
      'Use "Send" or "Pay" — most wallets accept Lightning addresses directly (the email-style format below).',
      "Enter the amount in sats or USD; the wallet handles invoice fetching.",
      "Confirm — payment settles in 1–2 seconds with near-zero fees."
    ]
  }
], a = {
  name: "Wissem Boughamoura",
  avatarUrl: null,
  // falls back to initials avatar
  contactEmail: "contact@wbc-ui2.com",
  taglineCommercial: "Maintainer of wb-code, wb-core, and the wbc-ui2 ecosystem. Available for consulting, custom integrations, and commercial support contracts."
}, s = {
  heroGradient: "linear-gradient(135deg, #1a237e 0%, #311b92 100%)",
  pageBackground: null,
  accentColor: "deep-purple",
  ctaButtonColor: "deep-purple"
}, u = {
  name: "WbPayHub",
  props: {
    output: { type: [Array, String], default: () => ["stripe-checkout"] },
    pattern: {
      type: Function,
      default: (e, t) => {
        const i = {
          default_0: "<~VCard,grey pa-5>",
          default_1: `h5__${e.label} | pa-1 text-h6 font-weight-bold`
        };
        return e.url && (i.default_1 += ` | ${e.url}`), e.description && (i.default_2 = `div__${e.description} | body-2 mb-2`), i.default_3 = t, i;
      }
    },
    providers: { type: Array, default: () => r },
    recipientInfo: { type: Object, default: () => ({}) },
    branding: { type: Object, default: () => ({}) },
    cryptoAddresses: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      PAYMENT_PROVIDERS: r,
      RECIPIENT_INFO: a,
      BRANDING: s
    };
  },
  computed: {
    effectiveProviders() {
      return Object.keys(this.cryptoAddresses).length === 0 ? this.providers : this.providers.map((e) => this.cryptoAddresses[e.id] ? { ...e, address: this.cryptoAddresses[e.id] } : e);
    },
    effectiveRecipientInfo() {
      return { ...a, ...this.recipientInfo };
    },
    effectiveBranding() {
      return { ...s, ...this.branding };
    },
    accounts() {
      let e = {};
      return this.effectiveProviders.forEach((t) => {
        let i = ["<~ol>", "<li>"];
        t.steps && t.steps.length ? t.steps.forEach((o) => {
          i.push(o);
        }) : i.push("No steps specified"), e[t.id] = typeof this.pattern == "function" ? this.pattern(t, i) : {};
      }), e;
    }
  },
  render(e) {
    let t = {
      comp: this.output || ["stripe-checkout"],
      ...this.accounts
    };
    return e("WBC", { props: { item: t } });
  }
};
var d = /* @__PURE__ */ l(
  u
);
const p = d.exports, n = function(e, t = {}) {
  n.installed || (n.installed = !0, e.component("WbPayHub", p));
};
typeof window < "u" && window.Vue && n(window.Vue);
const b = { install: n };
export {
  p as WbPayHub,
  b as default
};
