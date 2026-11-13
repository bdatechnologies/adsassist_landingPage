import { IndustryPage, industryMetadata } from "@/components/industry-page"
import { FINTECH } from "@/content/industries"

export const metadata = industryMetadata(FINTECH)

export default function Page() {
  return <IndustryPage c={FINTECH} />
}
