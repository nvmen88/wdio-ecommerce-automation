# WDIO Ecommerce Automation

This project is an end-to-end test automation suite built with:

- **WebdriverIO** (`@wdio/cli`, `@wdio/local-runner`)
- **Cucumber** (`@wdio/cucumber-framework`)
- **Allure Reporter** (`@wdio/allure-reporter`)
- **Video Reporter** (`wdio-video-reporter`)
- **TypeScript**

The suite runs ecommerce workflows through browser automation and generates test results with screenshots, videos, and Allure reports.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run tests

Run the default WebdriverIO test command:

```bash
npm run wdio
```

Run all feature files explicitly:

```bash
npm run wdio:all
```

### Debugging and verbose logs

```bash
npm run wdio:debug
npm run wdio:verbose
npm run wdio:inspect
```

## Allure Reporting

Clean previous results and generate a new report:

```bash
npm run allure:clean
npm run allure:generate
npm run allure:open
```

Or run the full report flow:

```bash
npm run test:allure
```

## Configuration

The WebdriverIO configuration file is `wdio.conf.ts`.

Important behavior:

- `specs` uses `process.env.SPECT` if set, otherwise defaults to `./features/**/*.feature`
- `process.env.TAGS` is used for Cucumber tag filtering
- The suite runs against Chrome and Firefox by default

### Example environment overrides

```bash
SPECT="./features/login.feature" npm run wdio
TAGS="@smoke" npm run wdio
```

## Project Structure

- `features/` — Cucumber feature files and step definitions
- `wdio.conf.ts` — WebdriverIO configuration
- `tsconfig.json` — TypeScript configuration
- `allure-results/` — generated test result data
- `allure-report/` — generated Allure report output

## Notes

- Add any additional browser or service configuration inside `wdio.conf.ts`
- If a test file is already tracked by Git and you want it ignored, add it to `.gitignore` and run `git rm --cached <file>`
- Keep `allure-results` and `allure-report` out of version control if they are generated artifacts

## Continuous Integration

This repository now includes a GitHub Actions workflow in `.github/workflows/ci.yml` that:

- installs dependencies with `npm ci`
- runs smoke tests only using `npm run ci:test`
- generates `allure-report` artifacts without attempting to open a browser UI
- uploads `allure-results` and `allure-report` for review

The `performance_glitch_user` test remains available as `@slow` and is excluded from the default CI path.

To run smoke tests locally:

```bash
npm run wdio:smoke
```

## Recommended `.gitignore` entries

```gitignore
node_modules/
allure-results/
allure-report/
.DS_Store
```
