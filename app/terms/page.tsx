import type { Metadata } from "next"
import Link from "next/link"
import { Fill, LegalPage } from "@/components/legal"
import { LEGAL } from "@/lib/legal"
import { COMPANY, CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using AdsAssist: the app, the pixel, the API and webhooks.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  const L = LEGAL
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated={L.lastUpdated}
      intro={
        <p>
          These terms are an agreement between you and {COMPANY} (&quot;BDA&quot;, &quot;we&quot;, &quot;us&quot;), registered at{" "}
          <Fill value={L.registeredAddress} label="registered address" />, India. They cover your use of AdsAssist, including the app at app.adsassist.in,
          the pixel, the API and webhooks (together, &quot;the Service&quot;). By creating an account or using the Service, you agree to these terms. If you
          sign up for a company, you confirm you have the authority to bind that company.
        </p>
      }
      sections={[
        {
          id: "who",
          title: "1. Who can use AdsAssist",
          body: (
            <p>
              AdsAssist is for businesses. You must be at least 18 and use it for your business or your clients&apos; businesses, not for personal or
              household use.
            </p>
          ),
        },
        {
          id: "account",
          title: "2. Your account",
          body: (
            <ul>
              <li>Give us accurate details and keep them up to date.</li>
              <li>Keep your password safe. You are responsible for everything done under your account, including by team members you invite.</li>
              <li>
                Tell us at once at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you think someone has used your account without permission.
              </li>
              <li>
                Agencies are responsible for the client workspaces they create and for having their clients&apos; permission to connect their ad accounts and
                data.
              </li>
            </ul>
          ),
        },
        {
          id: "service",
          title: "3. What the Service does",
          body: (
            <>
              <p>
                AdsAssist reads data from your Google Ads and Meta accounts, tracks visits and forms on your websites, matches leads to campaigns, and shows
                reports, insights and alerts. When you switch these on, it also sends conversions and audiences back to Google and Meta.
              </p>
              <ul>
                <li>
                  <strong>Read-only for campaigns.</strong> AdsAssist does not create, edit, pause or change your campaigns, bids or budgets.
                </li>
                <li>
                  <strong>Updated every 15 minutes, not real-time.</strong> Google and Meta revise their own numbers for days, so figures can change.
                </li>
                <li>
                  <strong>Features marked &quot;coming soon&quot; or &quot;beta&quot;</strong> may change, be limited, or be removed.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "connections",
          title: "4. Connecting Google, Meta and other tools",
          body: (
            <p>
              When you connect an ad account or another tool, you allow us to access it on your behalf for the Service. Your use of Google and Meta stays
              subject to their own terms and policies. We are not responsible if a platform changes its API, limits access, or suspends your account. You can
              disconnect any account at any time.
            </p>
          ),
        },
        {
          id: "visitor-data",
          title: "5. Your visitors' and leads' data",
          body: (
            <>
              <p>
                When you use the pixel, API, webhooks or lead imports, you decide what data about your visitors and leads is collected. For that data you are
                the Data Fiduciary and we are your Data Processor under India&apos;s Digital Personal Data Protection Act, 2023. You agree to:
              </p>
              <ul>
                <li>
                  Have a privacy notice on your websites that tells visitors you use AdsAssist for tracking and advertising, and get their consent where the
                  law requires it. Consent mode in the pixel can help with this.
                </li>
                <li>Have the right to send us any lead or customer data you upload, and to have it sent to Google and Meta when you switch that on.</li>
                <li>Not use AdsAssist to collect passwords, card or bank details, government ID numbers, health information, or other sensitive data.</li>
                <li>Not use AdsAssist on websites or apps aimed at children under 18.</li>
                <li>Follow the laws that apply to your marketing, including data protection, consumer protection and anti-spam laws.</li>
              </ul>
              <p>
                We process this data only to give you the Service, as described in our <Link href="/privacy">Privacy Policy</Link>. A Data Processing
                Agreement is available on request.
              </p>
            </>
          ),
        },
        {
          id: "acceptable-use",
          title: "6. Things you must not do",
          body: (
            <>
              <ul>
                <li>Break the law, or Google&apos;s or Meta&apos;s advertising policies, using AdsAssist</li>
                <li>Try to get into accounts, workspaces or data that are not yours</li>
                <li>Copy, resell, or reverse-engineer the Service, or build a competing product from it</li>
                <li>Overload or disrupt the Service, or get around rate limits or security</li>
                <li>Upload malware or harmful code</li>
              </ul>
              <p>We may suspend access if we reasonably believe you are doing any of these, and we will tell you why where we can.</p>
            </>
          ),
        },
        {
          id: "fees",
          title: "7. Fees and payment",
          body: (
            <ul>
              <li>Plans and prices are set out in your order or quote.</li>
              <li>Fees are in Indian Rupees and exclude GST, which is added to your invoice.</li>
              <li>If a payment fails, we may limit your account after telling you.</li>
              <li>We will give you at least 30 days&apos; notice before a price change affects you.</li>
            </ul>
          ),
        },
        {
          id: "ownership",
          title: "8. Your data and our software",
          body: (
            <ul>
              <li>
                <strong>Your data stays yours.</strong> You own your account data, ad data and lead data. You give us permission to use it only to run,
                secure and support the Service.
              </li>
              <li>
                <strong>Our software stays ours.</strong> BDA owns AdsAssist, its code, design and brand. We give you a limited right to use it while your
                account is active.
              </li>
              <li>
                <strong>Feedback.</strong> If you send us ideas or suggestions, we may use them without owing you anything.
              </li>
              <li>
                <strong>Anonymous statistics.</strong> We may use combined, anonymous statistics that cannot identify you, your clients or any person, to
                improve the Service.
              </li>
            </ul>
          ),
        },
        {
          id: "ai",
          title: "9. AI summaries",
          body: (
            <p>
              AI summaries and action lists are produced automatically from your data. They can be wrong or incomplete. Check them before you act on them;
              decisions about your campaigns stay with you.
            </p>
          ),
        },
        {
          id: "no-guarantee",
          title: "10. No guarantee of results",
          body: (
            <>
              <p>
                AdsAssist helps you understand your ads. We do not promise any level of leads, sales, revenue or return on ad spend. Attribution of a sale to a
                campaign is a best estimate based on the data available, and can differ from Google&apos;s, Meta&apos;s or your CRM&apos;s numbers.
              </p>
              <p>
                The Service is provided &quot;as is&quot;. To the extent the law allows, we do not give any other promises, for example that the Service will
                always be available or error-free.
              </p>
            </>
          ),
        },
        {
          id: "liability",
          title: "11. Limits on our liability",
          body: (
            <>
              <p>To the extent the law allows:</p>
              <ul>
                <li>We are not liable for indirect or consequential losses, such as lost profits, lost revenue, lost data, or ad spend.</li>
                <li>Our total liability for any claim is limited to the fees you paid us in the 12 months before the claim.</li>
              </ul>
              <p>Nothing in these terms limits liability that cannot be limited by law.</p>
            </>
          ),
        },
        {
          id: "indemnity",
          title: "12. If you break these terms",
          body: (
            <p>
              You agree to cover our reasonable losses and legal costs if a third party makes a claim against us because of the data you sent us, your
              websites or ads, or your breach of these terms.
            </p>
          ),
        },
        {
          id: "ending",
          title: "13. Ending the agreement",
          body: (
            <ul>
              <li>You can close your account at any time from settings or by emailing us.</li>
              <li>We may end or suspend your account if you seriously break these terms, or with 30 days&apos; notice for any other reason.</li>
              <li>
                After your account closes, you can ask to export your data within 30 days. After that we delete it, as set out in the{" "}
                <Link href="/privacy">Privacy Policy</Link>, except where the law requires us to keep it.
              </li>
            </ul>
          ),
        },
        {
          id: "changes",
          title: "14. Changes to these terms",
          body: (
            <p>
              We may update these terms. For significant changes we will tell you by email or in the app at least 15 days before they take effect. If you keep
              using the Service after that, the new terms apply.
            </p>
          ),
        },
        {
          id: "law",
          title: "15. Law and disputes",
          body: (
            <p>
              These terms are governed by the laws of India. The courts in <Fill value={L.courtsCity} label="city" /> have exclusive jurisdiction. Before going
              to court, both sides will try to settle the dispute by talking for at least 30 days.
            </p>
          ),
        },
        {
          id: "contact",
          title: "16. Contact",
          body: (
            <p>
              {COMPANY}, <Fill value={L.registeredAddress} label="address" />.
              <br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          ),
        },
      ]}
    />
  )
}
