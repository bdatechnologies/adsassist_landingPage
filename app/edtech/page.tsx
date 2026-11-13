import { IndustryPage, industryMetadata } from "@/components/industry-page"
import { EDTECH } from "@/content/industries"

export const metadata = industryMetadata(EDTECH)

export default function Page() {
  return <IndustryPage c={EDTECH} />
}
