import type { Metadata } from "next"
import { Fill, LegalPage } from "@/components/legal"
import { LEGAL } from "@/lib/legal"
import { COMPANY, CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What personal data AdsAssist collects, why, and what you can do about it.",
  alternates: { canonical: "/privacy" },
}

const COOKIES = [
  { name: "_aa_did", what: "Recognises the same browser across visits", how: "400 days" },
  { name: "_aa_attr", what: "Remembers which ad or campaign brought the visitor", how: "90 days" },
  { name: "_aa_consent", what: "Remembers whether the visitor agreed to tracking", how: "365 days" },
]

export default function PrivacyPage() {
  const L = LEGAL
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={L.lastUpdated}
      intro={
        <p>
          This policy explains what personal data AdsAssist collects, why, and what you can do about it. AdsAssist is a product of {COMPANY} (&quot;BDA&quot;,
          &quot;we&quot;, &quot;us&quot;), registered at <Fill value={L.registeredAddress} label="registered address" />, India.
        </p>
      }
      sections={[
        {
          id: "roles",
          title: "1. Two kinds of data, two roles",
          body: (
            <>
              <p>
                <strong>Your data as our customer.</strong> When you sign up and use AdsAssist, we decide how your account data is used. For this data we are
                the Data Fiduciary under India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).
              </p>
              <p>
                <strong>Your visitors&apos; and leads&apos; data.</strong> When you install the AdsAssist pixel or send us leads, we process data about your
                website visitors and leads only on your instructions, to give you the service. For this data you are the Data Fiduciary and we are your Data
                Processor. You are responsible for telling your visitors about it and getting consent where the law requires it.
              </p>
            </>
          ),
        },
        {
          id: "customers",
          title: "2. What we collect from you (our customers)",
          body: (
            <ul>
              <li>
                <strong>Account details:</strong> name, email, phone, company name, password (stored only in hashed form) and team members you invite.
              </li>
              <li>
                <strong>Ad account data:</strong> when you connect Google Ads or Meta, we receive campaign, ad group, ad, keyword, search-term, spend and
                results data for the accounts you choose. We get this through Google&apos;s and Meta&apos;s official sign-in. We never see your Google or Meta
                password.
              </li>
              <li>
                <strong>Usage data:</strong> pages you open in the app, actions you take, device, browser and IP address, used to run and secure the service.
              </li>
              <li>
                <strong>Billing details:</strong> billing name, GST number and address. Card payments are handled by our payment provider and we do not store
                card numbers.
              </li>
              <li>
                <strong>Messages:</strong> emails and support requests you send us.
              </li>
            </ul>
          ),
        },
        {
          id: "visitors",
          title: "3. What the pixel and integrations collect about your visitors and leads",
          body: (
            <>
              <p>On websites where you install the AdsAssist pixel, or through data you send by API, webhook or file, we process:</p>
              <ul>
                <li>Pages visited, time of visit, referring page and landing page</li>
                <li>Ad click IDs (for example gclid, gbraid, wbraid, fbclid) and UTM tags</li>
                <li>Form activity: form starts, submits and abandonment, and values typed into form fields such as name, email and phone</li>
                <li>IP address, browser, device and country</li>
                <li>Lead details you send us: name, email, phone, stage in your sales pipeline, deal value, and other fields you choose to send</li>
                <li>Email opens and link clicks, for emails you track through AdsAssist</li>
              </ul>
              <p>
                <strong>What the pixel does not collect.</strong> It does not record the values of password fields, or fields that look like card numbers,
                CVV, OTP, PIN, Aadhaar, PAN, bank account or IFSC numbers, or date of birth. It records only that such a field was filled.
              </p>
              <p>
                <strong>Consent mode.</strong> If you switch consent mode on, the pixel sends no personal details until the visitor agrees. Visitors who opt
                out are never uploaded to ad platforms or added to audiences.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "4. Cookies and local storage",
          body: (
            <>
              <p>The pixel stores small files in the visitor&apos;s browser:</p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-left text-[15px]">
                  <thead className="bg-mist text-ink">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">What it does</th>
                      <th className="px-4 py-3 font-semibold whitespace-nowrap">How long it lasts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIES.map((c) => (
                      <tr key={c.name} className="border-t border-line">
                        <td className="px-4 py-3">
                          <code>{c.name}</code>
                        </td>
                        <td className="px-4 py-3">{c.what}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{c.how}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">The AdsAssist app itself uses cookies needed to keep you signed in. This website does not use analytics or advertising cookies.</p>
            </>
          ),
        },
        {
          id: "use",
          title: "5. How we use data",
          body: (
            <>
              <ul>
                <li>To run AdsAssist: show your reports, match leads to campaigns, send alerts and weekly emails.</li>
                <li>To send results back to Google and Meta when you switch this on (offline conversions and Conversions API).</li>
                <li>To build audiences you create and sync them to Google and Meta.</li>
                <li>To create AI summaries of your account when you ask for them.</li>
                <li>To keep the service secure, fix problems and prevent misuse.</li>
                <li>To talk to you about your account, and, if you agree, about product news. You can unsubscribe at any time.</li>
              </ul>
              <p>
                We do not sell personal data. We do not use your visitors&apos; or leads&apos; data for our own marketing, and we do not combine one
                customer&apos;s data with another&apos;s.
              </p>
            </>
          ),
        },
        {
          id: "sharing",
          title: "6. Who we share data with",
          body: (
            <ul>
              <li>
                <strong>Google and Meta,</strong> only when you ask us to: conversions and audiences you set up. Email addresses and phone numbers are hashed
                (SHA-256) before upload.
              </li>
              <li>
                <strong>Service providers</strong> who help us run AdsAssist, under contracts that require them to protect the data:
                <ul>
                  <li>Cloud hosting, database and email delivery providers</li>
                  <li>
                    AI summaries: Anthropic (Claude). We send account metrics and campaign names to create summaries. We do not send lead names or contact
                    details.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Webhooks and tools you connect:</strong> data you choose to send out of AdsAssist goes to the systems you name.
              </li>
              <li>
                <strong>Legal reasons:</strong> when the law, a court or a government authority requires it.
              </li>
              <li>
                <strong>Business transfer:</strong> if BDA is merged or sold, data moves to the new owner under this policy.
              </li>
            </ul>
          ),
        },
        {
          id: "google-meta",
          title: "7. Google and Meta data",
          body: (
            <p>
              AdsAssist reads Google Ads data with read-only access and does not change your campaigns, bids or budgets. Our use of information received from
              Google APIs follows the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
                Google API Services User Data Policy
              </a>
              , including its Limited Use requirements. Data from Meta is used only to provide AdsAssist to you, in line with Meta&apos;s Platform Terms. You
              can disconnect an ad account at any time; we then stop all access.
            </p>
          ),
        },
        {
          id: "retention",
          title: "8. How long we keep data",
          body: (
            <ul>
              <li>
                Account data: while your account is active, unless the law needs us to keep it longer (for example, tax records).
              </li>
              <li>
                Ad platform data and visitor and lead data: while your account is active. When you delete a workspace or close your account, we delete it.
              </li>
              <li>Webhook delivery logs: 30 days. Sync history and in-app notifications: 90 days.</li>
              <li>Security logs: at least one year, as Indian law requires.</li>
            </ul>
          ),
        },
        {
          id: "security",
          title: "9. How we protect data",
          body: (
            <>
              <ul>
                <li>Access to ad platforms through official sign-in; access tokens are stored encrypted.</li>
                <li>Passwords stored only in hashed form.</li>
                <li>Data sent over encrypted connections (HTTPS).</li>
                <li>Role-based access in every workspace: owner, admin, analyst, viewer.</li>
                <li>Signed webhooks, and API keys shown only once.</li>
              </ul>
              <p>If a data breach affects your personal data, we will tell you and the Data Protection Board of India as the law requires.</p>
            </>
          ),
        },
        {
          id: "rights",
          title: "10. Your rights",
          body: (
            <>
              <p>Under the DPDP Act you can:</p>
              <ul>
                <li>Ask what personal data we hold about you and how we use it</li>
                <li>Ask us to correct, complete, update or delete it</li>
                <li>Withdraw consent, where we rely on consent</li>
                <li>Name someone to act for you if you die or cannot act</li>
                <li>Complain to us, and then to the Data Protection Board of India</li>
              </ul>
              <p>
                To use these rights, email{" "}
                <a href={`mailto:${L.privacyEmail}`}>{L.privacyEmail}</a>.{" "}
                <strong>If you are a visitor or lead of one of our customers,</strong> please contact that business first, because they control your data. We
                will help them answer you.
              </p>
            </>
          ),
        },
        {
          id: "grievance",
          title: "11. Grievance Officer",
          body: (
            <>
              <p>
                {COMPANY}, {L.registeredAddress}.
                <br />
                Email: <a href={`mailto:${L.grievanceEmail}`}>{L.grievanceEmail}</a>
              </p>
            </>
          ),
        },
        {
          id: "children",
          title: "12. Children",
          body: <p>AdsAssist is a business tool and is not meant for anyone under 18. We do not knowingly collect children&apos;s data.</p>,
        },
        {
          id: "changes",
          title: "13. Changes to this policy",
          body: <p>We may update this policy. If the changes are significant, we will tell you by email or in the app before they take effect.</p>,
        },
        {
          id: "contact",
          title: "14. Contact us",
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
