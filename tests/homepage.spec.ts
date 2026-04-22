import { test, expect } from '@playwright/test';

/**
 * Tests de non-régression – Page d'accueil (/)
 */
test.describe('Homepage', () => {

  // ── Tests HTTP (sans navigateur, pas de vidéo) ──────────────────────────
  test('répond avec un statut HTTP 200', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
  });

  test("ne contient pas de page d'erreur serveur (5xx)", async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBeLessThan(500);
  });

  // ── Tests navigateur (avec vidéo) ───────────────────────────────────────
  test('se charge correctement dans le navigateur', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Petite pause pour que la vidéo capture bien le rendu de la page
    await page.waitForTimeout(1500);
  });

});
