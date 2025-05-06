import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: [
    "/",
    "/about",
    "/projects",
    "/projects/custodian",
    "/projects/whistleblower",
    "/projects/gamified-respiratory-exercises",
    "/projects/babbelbord"
  ],
} satisfies Config;

