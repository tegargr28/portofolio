# Tegar Gemilang — Portfolio

This is my personal portfolio website. I use it to present my QA projects and my earlier web development work in one place, with my CV available for download on the homepage.

Live site: https://tegargr28.netlify.app/

## What is on the site

- Selected Work: my quality assurance projects first (Digital Banking QA on ParaBank, SauceDemo manual testing, OrangeHRM manual and API testing, OrangeHRM Cypress automation), followed by two web projects from my internship and freelance work.
- About: a short bio and the tools I work with, split into QA and development.
- Resume: my work experience and education, kept in sync with my CV.
- Contact: a form handled by Netlify Forms, plus my email and location.

## Built with

- React 18 and Vite 5
- Tailwind CSS 3 for styling
- Framer Motion for the scroll and hover animations
- React Icons

The site has a dark and light theme. It defaults to dark and remembers the visitor's choice in localStorage.

## Running it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Project structure

- `src/components/` — one file per section: Navbar, Hero, Projects, About, Education, Contact, Footer
- `src/App.jsx` — page assembly and theme background
- `public/` — CV PDF, optimized images (WebP), favicon, robots.txt and sitemap.xml
- `netlify.toml` — build settings for Netlify (fresh install with `npm ci`, then build)

## Deployment

The site is hosted on Netlify. Every push to the `main` branch deploys automatically. Changes are prepared on feature branches and merged through pull requests after I check the deploy preview.

## Contact

- Email: tegargemilangrasidi28@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-tegar-gemilang-rasidi-6095b3138/
- GitHub: https://github.com/tegargr28

Design inspired by FolioOne by BootstrapMade, re-implemented in my own React code.
