import { ButtonLink, Container } from "@/components/ui"

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-36">
      <p className="text-brand text-sm font-semibold">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-ink-soft">The link may be old, or the page has moved.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/" arrow>
          Go to the home page
        </ButtonLink>
      </div>
    </Container>
  )
}
