# Tests de non-régression

Suite de tests automatisés avec [Playwright](https://playwright.dev/).

## Installation

```bash
npm install
npx playwright install --with-deps chromium
```

## Lancer les tests

```bash
# En local (mode liste)
npm test

# Avec rapport HTML généré dans playwright-report/
npm run test:report

# Mode CI (format GitHub Actions)
npm run test:ci
```

## Structure

```
e2e-tests/
├── tests/
│   └── homepage.spec.ts   # Tests de la page d'accueil
├── playwright.config.ts   # Config Playwright (baseURL, timeouts…)
└── .github/
    └── workflows/
        └── e2e.yml        # Pipeline GitHub Actions
```

## Ajouter de nouveaux tests

Créez un fichier `tests/ma-page.spec.ts` en suivant la même structure.  
Chaque fichier `*.spec.ts` est automatiquement détecté par Playwright.

## Variables d'environnement

| Variable   | Description                        | Défaut                                          |
|------------|------------------------------------|-------------------------------------------------|
| `BASE_URL` | URL de l'application à tester      | Défini dans `playwright.config.ts`              |
