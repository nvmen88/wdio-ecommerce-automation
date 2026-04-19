## 🚀 Live Demo

- 🔗 GitHub Repository: https://github.com/phuocnguyen0996/wdio-ecommerce-automation
- 📊 Allure Report:  

## 📌 Test Coverage

This framework covers:

- ✅ Login functionality (positive & negative)
- ✅ Data-driven testing with Scenario Outline
- ✅ Add to cart and checkout flow
- ✅ Error validation (locked user, invalid login)
- ✅ Performance scenario (`performance_glitch_user`)

## 🧱 Framework Design

- Page Object Model (POM)
- Reusable step definitions
- Environment-based configuration
- Parallel execution supported

## 🔄 CI/CD Pipeline

Integrated with GitHub Actions:

- ✔️ Runs automated tests on every push
- ✔️ Generates Allure reports
- ✔️ Publishes report to GitHub Pages

👉 View latest report: https://github.com/phuocnguyen0996/wdio-ecommerce-automation

## 💡 Purpose

This project demonstrates how to build a production-ready automation framework with:

- Scalable test structure
- CI/CD integration
- Rich reporting with Allure
- Real-world E2E test scenarios

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

## GitHub Pages report

After a successful push to `main` or `master`, the CI workflow publishes the generated Allure report to GitHub Pages.

- The report is generated from `allure-report/`
- It is deployed using GitHub Actions

## Notes

- Add any additional browser or service configuration inside `wdio.conf.ts`
- If a test file is already tracked by Git and you want it ignored, add it to `.gitignore` and run `git rm --cached <file>`
- Keep `allure-results` and `allure-report` out of version control if they are generated artifacts

## Continuous Integration

This repository now includes a GitHub Actions workflow in `.github/workflows/ci.yml` that:

- installs dependencies with `npm ci`
- runs smoke tests only using `npm run ci:test`
- generates `allure-report` artifacts without attempting to open a browser UI
- uploads `allure-results` and `allure-report` for reviewn

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
## 👤 Author

Phuoc Nguyen  
Automation Test Engineer  