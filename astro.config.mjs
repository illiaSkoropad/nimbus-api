// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nimbus API Docs",
      logo: {
        src: "/src/assets/logo.png",
        replacesTitle: true,
      },
      head: [
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": '{"token": "ВАШ_ТОКЕН_АНАЛІТИКИ"}',
          },
        },
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://tally.so/widgets/embed.js",
          },
        },
        {
          tag: "script",
          content: `
      window.TallyConfig = {
        "formId": "w2pWxp",
        "popup": {
          "emoji": {
            "text": "👋",
            "animation": "wave"
          },
          "open": {
            "trigger": "time",
            "ms": 5000
          }
        }
      };
    `,
        },
      ],
      customCss: ["./src/styles/hero.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://git.qix.sx/next-dev-illia-skoropad/nimbus-api",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [{ label: "About Nimbus API", link: "/" }],
        },
        {
          label: "Getting Started",
          items: [
            {
              label: "Quick Start Guide",
              link: "/getting-started/first-request/",
            },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Authentication", link: "/api/authentication/" },
            { label: "Endpoints", link: "/api/endpoints/" },
            { label: "Error Codes", link: "/api/errors/" },
          ],
        },
      ],
    }),
  ],
});
