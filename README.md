# nav8-uat sandbox site

A throwaway site that the nav8-uat QA suite lets Nav8 edit, commit and push to.
Category 13 (`categories/13-user-journeys.md` in nav8-uat) uses it.

- `npm run lint` · `npm run build` · `npm run dev` (http://localhost:5180), no dependencies.
- Every push to `main` deploys to GitHub Pages. The footer shows the deployed
  commit (`build: abc1234`), so "is it live?" can be checked against the real page.

Nothing here matters. QA runs push to it freely. Never point a QA run at a real repo.
