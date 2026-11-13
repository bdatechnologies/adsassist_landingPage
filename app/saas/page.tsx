import { IndustryPage, industryMetadata } from "@/components/industry-page"
import { SAAS } from "@/content/industries"

export const metadata = industryMetadata(SAAS)

export default function Page() {
  return <IndustryPage c={SAAS} />
}
