import { IndustryPage, industryMetadata } from "@/components/industry-page"
import { AGENCIES } from "@/content/industries"

export const metadata = industryMetadata(AGENCIES)

export default function Page() {
  return <IndustryPage c={AGENCIES} />
}
