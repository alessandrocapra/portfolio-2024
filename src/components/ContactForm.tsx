import { NiceInlineLink, SectionTitle } from './projects'

export const ContactForm = () => {
  return (
    <div className="py-8 max-w-prose mx-auto text-center">
      <SectionTitle>Get in touch</SectionTitle>
      <p className="text-gray-900 dark:text-gray-100">
        Want to discuss a project or just say hi? Feel free to{' '}
        <NiceInlineLink to="mailto:hello@alessandrocapra.me">send me an email</NiceInlineLink>
      </p>
    </div>
  );
};
