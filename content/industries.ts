import type { Faq } from "@/components/faq"

export type IndustryContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: string
  subhead: string
  /** Pipeline stages shown in the animated lead card. */
  stages: { key: string; label: string; cost: string }[]
  problem: { headline: string; cards: { t: string; d: string }[] }
  excel: { eyebrow: string; headline: string; body: string }
  how: { headline: string; steps: { t: string; d: string }[] }
  get: { t: string; d: string; soon?: boolean }[]
  faqs: Faq[]
  cta: string
}

const EXCEL_EYEBROW = "Still getting your ad report in an Excel sheet?"
const EXCEL_HEADLINE = "Stop waiting for a sheet. Get answers."

export const EDTECH: IndustryContent = {
  slug: "edtech",
  metaTitle: "AdsAssist for EdTech",
  metaDescription: "Know which Google and Meta ads bring people who buy your course, not just webinar sign-ups.",
  eyebrow: "For EdTech businesses",
  headline: "Know which ads fill your batches.",
  subhead:
    "You get hundreds of leads and webinar sign-ups from Google, Facebook and Instagram every month. AdsAssist shows you which ads brought people who actually bought your course, so you spend more on those and less on the ones that only bring sign-ups.",
  stages: [
    { key: "signup", label: "Sign-up", cost: "₹96" },
    { key: "webinar", label: "Webinar attended", cost: "₹240" },
    { key: "call", label: "Sales call", cost: "₹610" },
    { key: "sale", label: "Course sale", cost: "₹2,850" },
  ],
  problem: {
    headline: "Lots of sign-ups. Too few course sales.",
    cards: [
      { t: "Sign-ups are cheap, sales are not.", d: "One ad can bring 500 sign-ups and 5 course sales. Another brings 80 sign-ups and 12 course sales. Your ad report only shows the first number." },
      { t: "Your sales team knows, your ads don't.", d: "Who attended the webinar, who took the sales call, who paid: that sits with your sales team, not with Google or Meta." },
      { t: "The report comes too late.", d: "By the time someone builds the month-end Excel, the launch is over and the budget is gone." },
    ],
  },
  excel: {
    eyebrow: EXCEL_EYEBROW,
    headline: EXCEL_HEADLINE,
    body: "Your ad report arrives as a Google Sheet once a week or once a month, showing leads and cost per lead. It never tells you which ads sold your course. With AdsAssist you open one dashboard whenever you want, updated every 15 minutes, and see course sales by campaign. No more waiting for the weekly report.",
  },
  how: {
    headline: "Follow every lead from ad to course sale.",
    steps: [
      { t: "Sign-up.", d: "Someone registers for your free webinar or masterclass, or fills a Facebook lead form. AdsAssist notes which ad they came from." },
      { t: "Follow-up.", d: "Your team moves the lead to Webinar attended, Sales call done, Payment link sent. You set the stages; your CRM can update them for you." },
      { t: "Course sale.", d: "When they buy the course, AdsAssist shows that sale against the ad and campaign that brought it." },
      { t: "Better ads.", d: "AdsAssist sends course sales back to Google and Meta, so their bidding looks for more buyers like the ones who paid." },
    ],
  },
  get: [
    { t: "Cost per course sale", d: "by campaign, next to cost per sign-up" },
    { t: "People who left the form half-filled", d: "so your team can call them or show them ads again" },
    { t: "Audiences of course buyers", d: "to find more like them, and to stop showing ads to people who already bought" },
    { t: "Alerts", d: "when cost per sign-up jumps or a campaign spends with no leads" },
    { t: "A weekly report", d: "for you, without anyone building it in Excel" },
  ],
  faqs: [
    { q: "We use a CRM and a course platform. Do they connect?", a: "Yes. Your CRM or course platform can send stage changes and sales to AdsAssist through our API or a webhook. Your developer sets it up once." },
    { q: "Can I track one course launch separately?", a: "Yes. Pick any date range and compare it with the same length of time before it." },
  ],
  cta: "Spend your ad budget on course buyers, not sign-ups.",
}

export const SAAS: IndustryContent = {
  slug: "saas",
  metaTitle: "AdsAssist for SaaS",
  metaDescription: "Follow each user from the ad they clicked to the day they pay, and see what a paying customer costs from each campaign.",
  eyebrow: "For SaaS founders",
  headline: "Find the ads that bring paying users.",
  subhead:
    "Sign-ups are easy to buy. Paying customers are not. AdsAssist follows each person from the ad they clicked to the day they pay you, so you know what a real customer costs from each campaign.",
  stages: [
    { key: "signup", label: "Sign-up", cost: "₹180" },
    { key: "trial", label: "Trial", cost: "₹420" },
    { key: "paid", label: "Paying", cost: "₹3,900" },
    { key: "renewed", label: "Renewed", cost: "₹5,200" },
  ],
  problem: {
    headline: "Your ad dashboard stops at the sign-up.",
    cards: [
      { t: "Free sign-ups look like wins.", d: "Google and Meta count a sign-up as a conversion. Most of those people never pay." },
      { t: "Payment data lives somewhere else.", d: "Trials, upgrades and renewals sit in your app and your payment system, far away from your ad reports." },
      { t: "You can't tell which campaign is profitable.", d: "Without that link, budget goes to the campaign with the cheapest sign-up, which is often the one with the worst customers." },
    ],
  },
  excel: {
    eyebrow: EXCEL_EYEBROW,
    headline: EXCEL_HEADLINE,
    body: "Your ad report arrives as a Google Sheet once a week or once a month, showing clicks and sign-ups. It never tells you which ads brought paying customers. With AdsAssist you open one dashboard whenever you want, updated every 15 minutes, and see paying customers by campaign. No more waiting for the weekly report.",
  },
  how: {
    headline: "From first click to first payment.",
    steps: [
      { t: "Sign-up.", d: "Your app sends each new sign-up to AdsAssist with the ad it came from." },
      { t: "Trial and payment.", d: "When a user starts a trial, pays or renews, your app tells AdsAssist through a simple API call." },
      { t: "Cost per paying customer.", d: "AdsAssist shows each campaign's cost per sign-up, per trial and per paying customer side by side." },
      { t: "Smarter bidding.", d: "Paying customers go back to Google and Meta as conversions, so they find more people who pay, not just more people who sign up." },
    ],
  },
  get: [
    { t: "Cost per paying customer", d: "and revenue by campaign" },
    { t: "Return on ad spend", d: "based on what customers actually paid you" },
    { t: "Search terms and keywords", d: "that bring sign-ups but no payments, so you can cut them" },
    { t: "Audiences", d: "of paying users to find look-alikes, and to stop paying to reach existing customers" },
    { t: "An AI summary", d: "each week that tells you what to scale and what to pause" },
  ],
  faqs: [
    { q: "How does AdsAssist know when someone pays?", a: "Your app or payment system tells it. Your developer adds one API call when a payment succeeds." },
    { q: "We already use Google Analytics. Why this?", a: "Analytics tells you about visits. AdsAssist ties ad spend to the sales stages you define, including payments that happen days or weeks after the first click." },
  ],
  cta: "Pay for customers, not sign-ups.",
}

export const FINTECH: IndustryContent = {
  slug: "fintech",
  metaTitle: "AdsAssist for lenders and fintech",
  metaDescription: "Connect your ad spend to applications, approvals and disbursals, and see which campaigns bring loans that get paid out.",
  eyebrow: "For lenders and fintech",
  headline: "Cost per disbursal, not just cost per lead.",
  subhead:
    "In lending, a lead is only the start. Most applicants drop off at KYC or get rejected. AdsAssist connects your ad spend to applications, approvals and disbursals, so you know which campaigns bring loans that actually get paid out.",
  stages: [
    { key: "lead", label: "Lead", cost: "₹224" },
    { key: "application", label: "Application", cost: "₹963" },
    { key: "approved", label: "Approved", cost: "₹2,240" },
    { key: "disbursed", label: "Disbursed", cost: "₹4,917" },
  ],
  problem: {
    headline: "Your ads are judged on the wrong number.",
    cards: [
      { t: "Cheap leads, poor approvals.", d: "A campaign with a low cost per lead can bring applicants who never pass credit checks." },
      { t: "Disbursals sit in your loan system.", d: "Your ad team never sees them, so they keep buying more of the same leads." },
      { t: "Google and Meta learn from form fills.", d: "Their bidding chases people who fill forms, not people who get approved." },
    ],
  },
  excel: {
    eyebrow: EXCEL_EYEBROW,
    headline: EXCEL_HEADLINE,
    body: "Your ad report arrives as a Google Sheet once a week or once a month, showing leads and cost per lead. It never tells you which ads brought approved applicants. With AdsAssist you open one dashboard whenever you want, updated every 15 minutes, and see every stage of your funnel by campaign. No more waiting for the weekly report.",
  },
  how: {
    headline: "From ad click to disbursal.",
    steps: [
      { t: "Lead.", d: "An applicant clicks your ad and fills the form. AdsAssist records which campaign and keyword they came from." },
      { t: "Application and approval.", d: "Your loan system sends each stage to AdsAssist by API, or a daily file of the previous day's numbers." },
      { t: "Disbursal.", d: "AdsAssist shows applications, approvals, disbursals and disbursed amount next to your spend." },
      { t: "Better bidding.", d: "Approvals go back to Google and Meta as conversions, so they look for more applicants who qualify." },
    ],
  },
  get: [
    { t: "Cost per approval and cost per disbursal", d: "by campaign", soon: true },
    { t: "Disbursal % and spend as a share of disbursed amount", d: "next to your ad spend", soon: true },
    { t: "Pipeline stages up to disbursal", d: "set your way" },
    { t: "Audiences", d: "of approved applicants who have not taken the loan yet, to bring them back" },
    { t: "Privacy built in:", d: "contact details are hashed before they go to any ad platform, and people who opt out are never uploaded" },
  ],
  faqs: [
    { q: "Our loan system is custom-built. Can it connect?", a: "Yes. It can send data through our API, a webhook, or a daily file. AdsAssist accepts JSON, form data, XML or CSV." },
    { q: "Do you need our customers' financial data?", a: "No. AdsAssist needs the stage (applied, approved, disbursed) and the amount. It does not need credit scores or bank details." },
  ],
  cta: "Put your budget behind loans that get disbursed.",
}

export const REAL_ESTATE: IndustryContent = {
  slug: "real-estate",
  metaTitle: "AdsAssist for real estate",
  metaDescription: "See which Google and Meta campaigns bring site visits and bookings, not just leads that never pick up.",
  eyebrow: "For real estate developers and brokers",
  headline: "Know which ads bring site visits and bookings.",
  subhead:
    "Your ads bring plenty of leads, and most of them never pick up the phone. AdsAssist shows you which campaigns brought people who visited the site and booked a unit, so your budget goes behind real buyers.",
  stages: [
    { key: "lead", label: "Lead", cost: "₹410" },
    { key: "call", label: "Call connected", cost: "₹1,150" },
    { key: "visit", label: "Site visit", cost: "₹6,400" },
    { key: "booking", label: "Booking", cost: "₹58,000" },
  ],
  problem: {
    headline: "Hundreds of leads. A handful of site visits.",
    cards: [
      { t: "Lead forms bring junk.", d: "Wrong numbers, people just browsing, buyers outside your price range. Cost per lead looks great. Cost per booking doesn't." },
      { t: "Your sales team knows who visited.", d: "That sits in your CRM or a register, far away from your ad reports." },
      { t: "One booking pays for months of ads.", d: "You need to know exactly which campaign brought it, so you can do it again." },
    ],
  },
  excel: {
    eyebrow: EXCEL_EYEBROW,
    headline: EXCEL_HEADLINE,
    body: "Your ad report arrives as a Google Sheet once a week or once a month, showing leads and cost per lead. It never tells you which ads brought site visits or bookings. With AdsAssist you open one dashboard whenever you want, updated every 15 minutes, and see results by campaign. No more waiting for the weekly report.",
  },
  how: {
    headline: "Follow every lead from ad to booking.",
    steps: [
      { t: "Lead.", d: "Someone fills a Facebook lead form or the form on your project page. AdsAssist notes which ad they came from." },
      { t: "Call and site visit.", d: "Your sales team moves the lead to Call connected, Site visit scheduled, Site visit done. You set the stages; your CRM can update them for you." },
      { t: "Booking.", d: "When the buyer pays the booking amount, AdsAssist shows that booking against the campaign that brought it." },
      { t: "Better ads.", d: "Site visits and bookings go back to Google and Meta as conversions, so they look for more people who actually visit and buy." },
    ],
  },
  get: [
    { t: "Cost per site visit and cost per booking", d: "by campaign, next to cost per lead" },
    { t: "Each project tracked separately", d: "by campaign or in its own workspace" },
    { t: "Audiences of site visitors who haven't booked yet", d: "to bring them back with ads" },
    { t: "Alerts", d: "when cost per lead jumps or a campaign spends with no leads" },
    { t: "A weekly report", d: "in your inbox, without anyone building it in Excel" },
  ],
  faqs: [
    { q: "We run ads for several projects. Can I see each one separately?", a: "Yes. Filter by campaign, or keep each project in its own workspace." },
    { q: "Our sales team uses a CRM. Does it connect?", a: "Yes, through our API or a webhook. Your developer sets it up once. If you don't have a CRM, your team can move leads through stages inside AdsAssist." },
  ],
  cta: "Spend on buyers who visit, not leads who don't pick up.",
}

export const AGENCIES: IndustryContent = {
  slug: "agencies",
  metaTitle: "AdsAssist for marketing agencies",
  metaDescription: "Show every client which of your campaigns brought them paying customers, in one dashboard you both can see.",
  eyebrow: "For marketing agencies",
  headline: "Prove your ads bring sales, not just leads.",
  subhead:
    "Your clients don't care about clicks. They care about customers. AdsAssist shows every client which of your campaigns brought them paying customers, in one dashboard you both can see.",
  stages: [
    { key: "lead", label: "Lead", cost: "₹310" },
    { key: "qualified", label: "Qualified", cost: "₹720" },
    { key: "meeting", label: "Meeting", cost: "₹1,640" },
    { key: "sale", label: "Sale", cost: "₹6,800" },
  ],
  problem: {
    headline: "Good work gets lost in bad reporting.",
    cards: [
      { t: "Reports eat your team's week.", d: "Someone copies numbers from Google and Meta into Excel for every client, every week." },
      { t: "Clients judge you on lead quality you can't see.", d: "They say \"the leads are junk\", and you have no data from their sales team to answer back." },
      { t: "Trust breaks when numbers don't match.", d: "Google says one thing, Meta says another, the client's CRM says a third." },
    ],
  },
  excel: {
    eyebrow: "Replace the weekly Excel report",
    headline: "Your clients are tired of Excel sheets.",
    body: "Most business owners who hire an agency get their results in a Google Sheet once a week or once a month. They can't see which ads brought customers, so they start doubting the work. Give them a live dashboard instead, updated every 15 minutes, showing sales by campaign. Clients who can see results stay longer.",
  },
  how: {
    headline: "One login, every client, real results.",
    steps: [
      { t: "Add each client", d: "as its own workspace with its own ad accounts, currency and time zone." },
      { t: "Connect their website and CRM", d: "so leads and sales flow in and get matched to your campaigns." },
      { t: "Give the client a view-only login", d: "to see the same numbers you see, updated every 15 minutes." },
      { t: "Send a weekly report", d: "with an AI summary of what happened and what you'll do next." },
    ],
  },
  get: [
    { t: "All clients in one place", d: "with roles for your team: owner, admin, analyst, viewer" },
    { t: "Cost per sale by campaign", d: "for each client, so you can show what's working" },
    { t: "Wasted spend found fast:", d: "keywords and search terms that spend without converting" },
    { t: "Real results sent back to Google and Meta", d: "so your campaigns get better at finding buyers" },
    { t: "Alerts", d: "when a client's spend, leads or cost per lead moves the wrong way, before the client notices" },
  ],
  faqs: [
    { q: "Will clients see everything?", a: "Only their own workspace, and only with view-only access unless you give them more." },
    { q: "Can AdsAssist change campaigns for us?", a: "No. It is read-only. Your team stays in control of every campaign change." },
  ],
  cta: "Keep clients longer by showing what your ads really sell.",
}
