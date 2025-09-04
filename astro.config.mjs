// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nimbus API Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://git.qix.sx/next-dev-illia-skoropad/nimbus-api",
        },
      ],
      sidebar: [],
    }),
  ],
});
