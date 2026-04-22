import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'https://staging-5em2ouy-6x54k73patttg.fr-3.platformsh.site',
    // Ignorer les erreurs SSL éventuelles sur les envs de staging
    ignoreHTTPSErrors: true,
    // Enregistrement vidéo de chaque test
    video: {
      mode: 'on',
      size: { width: 1280, height: 720 },
    },
  },

  // Dossier de sortie des vidéos et traces
  outputDir: './videos',
});
