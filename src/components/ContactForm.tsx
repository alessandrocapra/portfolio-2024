import { SectionTitle } from './projects'

export const ContactForm = () => {
  return (
    <section className="p-4 md:p-16 text-center border-t">
      <SectionTitle title="Contact me" />
      <p>Interested in working together? <a href="mailto:hello@alessandrocapra.me" className=
        "text-green-600 relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-400"
      >hello@alessandrocapra.me</a></p>
    </section>
  )
}
