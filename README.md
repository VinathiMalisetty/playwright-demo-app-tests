# Playwright Demo App – Data-driven test suite (TypeScript)

Data-driven Playwright tests for the Demo App using TypeScript and a JSON test-data file to avoid duplication and scale easily.

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
```

- **Headed (see browser):** `npm run test:headed`
- **UI mode:** `npm run test:ui`
- **Debug:** `npm run test:debug`

## Project layout

- **`test-data/test-cases.json`** – All test cases (section, task title, column, tags). Add or change cases here; no test code changes needed.
- **`test-data/types.ts`** – TypeScript interfaces for test case data.
- **`tests/fixtures/auth.ts`** – Login helper (credentials and sign-in flow).
- **`tests/demo-app.spec.ts`** – Single data-driven spec that loops over `test-cases.json`.
- **`playwright.config.ts`** – Playwright configuration.
- **`tsconfig.json`** – TypeScript configuration.

## Login (Demo App)

- **URL:** https://animated-gingersnap-8cf7f2.netlify.app/
- **Username:** `admin`
- **Password:** `******`

## Test cases (from JSON)

| ID  | Section           | Task                         | Column      | Tags                    |
|-----|-------------------|------------------------------|-------------|-------------------------|
| TC1 | Web Application   | Implement user authentication| To Do       | Feature, High Priority  |
| TC2 | Web Application   | Fix navigation bug           | To Do       | Bug                     |
| TC3 | Web Application   | Design system updates        | In Progress | Design                  |
| TC4 | Mobile Application| Push notification system     | To Do       | Feature                 |
| TC5 | Mobile Application| Offline mode                | In Progress | Feature, High Priority  |
| TC6 | Mobile Application| App icon design             | Done        | Design                  |

## Adding tests

Edit `test-data/test-cases.json`: add a new object to the `testCases` array with `id`, `description`, `section`, `taskTitle`, `column`, and `tags`. The same spec will run the new case with no code changes.
