import { ButtonLink, Container } from "@/components/ui"
import { Reveal } from "@/components/reveal"

export function CtaBand({ title, body, button = "Book a demo" }: { title: string; body?: string; button?: string }) {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-navy px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="bg-brand absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl" aria-hidden />
          <Container className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
            {body ? <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{body}</p> : null}
            <div className="mt-9 flex justify-center">
              <ButtonLink href="/demo" size="lg" arrow variant="secondary" className="border-transparent">
                {button}
              </ButtonLink>
            </div>
          </Container>
        </div>
      </Reveal>
    </section>
  )
}
