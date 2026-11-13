import { IndustryPage, industryMetadata } from "@/components/industry-page"
import { REAL_ESTATE } from "@/content/industries"

export const metadata = industryMetadata(REAL_ESTATE)

export default function Page() {
  return <IndustryPage c={REAL_ESTATE} />
}
