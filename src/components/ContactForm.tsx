import { NiceInlineLink, SectionTitle } from './projects'

export const ContactForm = () => {
  return (
    <section className="p-4 md:p-16 text-center border-t">
      <SectionTitle>Contact me</SectionTitle>
      <p>Interested in working together? <NiceInlineLink to="mailto:hello@alessandrocapra.me">hello@alessandrocapra.me</NiceInlineLink></p>
    </section>
  )
}
