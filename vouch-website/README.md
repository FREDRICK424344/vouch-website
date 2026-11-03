# Vouch: verified services, jobs and community (demo site)

A static website: no build step, no server needed.

## Files
- `index.html`  all pages and sections
- `styles.css`  all styling (white and green theme, Default / Light / Dark modes, hover and click effects, circular profile photos)
- `app.js`      all behaviour (search, accounts, plans, follows, alerts, chat, posts with comments, jobs, pricing, photo viewer, theme switch)

## Run it
Open `index.html` in a browser.

## Put it online (cheapest option)
1. Upload these files to a GitHub repository.
2. Create a Cloudflare Pages project connected to it.
3. Leave the build command empty and deploy.

## Themes
A small switch at the bottom-right corner chooses Default (follows the device setting), Light or Dark. The choice is remembered in the browser.

## Plans (demo)
- Free accounts can browse, read messages and comment.
- Pressing Send on a message (or submitting a job application, quote request or viewing request) without a paid plan redirects to the Pricing page. After a plan is chosen the user is taken back to where they were.
- Paid plans: Verified, Premium Verified, Enterprise.
- In this demo, choosing a plan on the Pricing page switches it on instantly with no payment.

## Important: this is a demo
- Accounts, plans, listings, jobs, posts, comments, messages, follows and alerts are saved in the visitor's own browser only.
- No SMS is sent (the code is shown on screen), no payments are taken, and passwords are not securely protected.
- Sample professionals, jobs, workers, posts and comments are placeholder data.
- To make it real, add a backend, an SMS provider, a payment processor and real identity checks.
