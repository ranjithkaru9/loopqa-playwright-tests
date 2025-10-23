# LoopQA Data-Driven Playwright Automation Project

This repository contains a **data-driven Playwright test suite**  
The project demonstrates automation of login and validation workflows for the **LoopQA Demo Application** using **TypeScript** and **Playwright**.

---

## Objective

To design a **maintainable, scalable, and data-driven** automation suite that:
- Automates the **login workflow**.
- Validates tasks across multiple projects and columns (To Do, In Progress, Done).
- Uses a **JSON-driven approach** to eliminate hard-coded test logic.
- Runs seamlessly on **Chromium, Firefox, and WebKit** browsers.

---

## Tech Stack Used

| Category | Tools / Technologies |
|-----------|----------------------|
| Language | TypeScript |
| Framework | Playwright |
| Test Runner | Playwright Test |
| Data Source | JSON-driven test data |
| CI/CD Ready | GitHub Actions / GitHub Workflows |
| Browsers Supported | Chromium, Firefox, WebKit |

---

## Demo Application

**URL:** [https://animated-gingersnap-8cf7f2.netlify.app/](https://animated-gingersnap-8cf7f2.netlify.app/)

**Credentials:**
- **Username:** `admin`  
- **Password:** `password123`

---

## 📂 Project Structure

```bash
loopqa-project/
├── tests/
│   └── tasks.spec.ts           # Data-driven Playwright tests
├── utils/
│   └── login.ts                # Login helper for reusability
├── data/
│   └── tasks.json              # JSON-based test data
├── playwright.config.ts        # Multi-browser configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation



---

## Test Data (data/tasks.json)

All test cases are defined in `tasks.json` and dynamically loaded into the Playwright suite.

```json
[
  { "appName": "Web Application", "column": "To Do", "taskName": "Implement user authentication", "tags": ["Feature", "High Priority"] },
  { "appName": "Web Application", "column": "To Do", "taskName": "Fix navigation bug", "tags": ["Bug"] },
  { "appName": "Web Application", "column": "In Progress", "taskName": "Design system updates", "tags": ["Design"] },
  { "appName": "Mobile Application", "column": "To Do", "taskName": "Push notification system", "tags": ["Feature"] },
  { "appName": "Mobile Application", "column": "In Progress", "taskName": "Offline mode", "tags": ["Feature", "High Priority"] },
  { "appName": "Mobile Application", "column": "Done", "taskName": "App icon design", "tags": ["Design"] }
]
```
##
--> How the Tests Work
1. Login Automation
   - Opens the demo site
   - Enters credentials (admin / password123)
   - Verifies successful login by checking for the Web Application heading
2. Data-Driven Validation
   - Reads all test cases from tasks.json
   - Navigates dynamically to each project
   - Finds the correct column (To Do, In Progress, Done)
   - Validates the presence of the task and its tags
3. Reusability & Maintainability
   - Login is abstracted into a helper (login.ts)
   - Test flow auto-adapts to new data in JSON without modifying code


--> How to Run Tests Locally
1. Clone the Repository
   ```bash
   git clone https://github.com/ranjithkaru9/loopqa-playwright-tests.git
   cd loopqa-playwright-tests
   ```
3. Install Dependencies
   ```bash
   npm install
   ```
5. Install Browsers
   ```bash
   npx playwright install
   ```
6. Run Tests
   ```bash
   npx playwright test --headed
   ```
   Or run in headless mode:
   ```bash
   npx playwright test
   ```
8. View HTML Report
   After the run completes:
   ```bash
   npx playwright show-report
   ```
   This opens a detailed HTML report with pass/fail summaries and screenshots for failed tests.
9. Cross-Browser Testing
   Run tests across all browsers (Chromium, Firefox, WebKit):
   ```bash
   npx playwright test --project=all
   ```
