# 🌾 Smart Agri Assistant

A responsive React application for farmer-focused agriculture guidance, built with Vite.

🔗 **Existing live version:** [https://yesaswini19.github.io/Smart-Agri-Assistant/](https://yesaswini19.github.io/Smart-Agri-Assistant/) (the previous deployment; this React branch is separate)

## Features

- Responsive single-page layout with home, features, farmer query, and contact sections.
- Sample crop recommendation responses in English, Telugu, and Hindi.
- Localized advice and market insight buttons that display sample results.
- Crop image picker, currently used as a UI placeholder rather than an image analyzer.
- Voice action placeholder for a future microphone integration.
- Contact form with browser validation and an on-page confirmation.
- Responsive layout for mobile, tablet, and desktop.

## Technology

- React 19
- Vite 7
- JavaScript and CSS

## Getting Started

### Requirements

- Node.js 20.19+ or 22.12+.
- npm, included with Node.js.

### Install and run locally

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deployment

This React app is configured for Vercel in `vercel.json`. Import the repository into Vercel and select the `react-migration` branch. Use the Vite framework preset, `npm run build` as the build command, and `dist` as the output directory. No environment variables are required.

The existing GitHub Pages version above remains unchanged; this branch does not deploy to Pages.

## Project Structure

```text
src/
  components/     Navigation, hero, feature, farmer, contact, and footer UI
  pages/           Page-level views
  App.jsx          Application root
  main.jsx         React entry point
  index.css        Global and responsive styles
index.html         Vite HTML entry point
vite.config.js     Vite configuration
```

## Prototype Scope

All recommendations, weather, profit, and market values are hard-coded sample text, not live data or personalized analysis. The image action opens a file picker, but selecting a file does not trigger image analysis. Voice input displays a placeholder message. The contact form validates fields in the browser and displays a local confirmation; it does not send the message to a service.

The app makes no external API calls and requires no environment variables.
