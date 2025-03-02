import { NiceInlineLink, SectionTitle } from './projects'

export const ContactForm = () => {
  return (
    <div className="py-8 max-w-prose mx-auto text-center">
      <SectionTitle>Get in touch</SectionTitle>
      <p className="text-gray-900 dark:text-gray-100 mb-0">
        <span>✉️ Send me </span><NiceInlineLink to="mailto:hello@alessandrocapra.me">an email</NiceInlineLink> | <span>👔 Contact me on </span><NiceInlineLink to="https://linkedin.com/in/capraalessandro">LinkedIn</NiceInlineLink> | <span>📄 Check my </span> <NiceInlineLink to="/CV_Alessandro_Capra.pdf">CV</NiceInlineLink>
      </p>
    </div>
  );
};
