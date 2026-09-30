# 🌾 Smart Agri Assistant

A responsive React application for farmer-focused agriculture guidance, built with Vite.

🔗 **Live Project:** [https://yesaswini19.github.io/Smart-Agri-Assistant/](https://yesaswini19.github.io/Smart-Agri-Assistant/)

## Features

- Single-page navigation for the home, features, farmer query, and contact sections.
- Sample crop recommendations in English, Telugu, and Hindi.
- Localized advice and sample market insight actions.
- Crop image file picker.
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

This React migration is on the `react-migration` branch and is not published. The existing live project remains unchanged at the URL above.

## Project Structure

```text
src/
  components/   Reusable navigation, form, feature, and layout components
  pages/        Page-level views
  App.jsx       Application root
  main.jsx      React entry point
  index.css     Global and responsive styles
index.html      Vite HTML entry point
vite.config.js Vite configuration
```

## Prototype Scope

Recommendations, weather, profit, and market values are sample text, not live data. Selecting an image opens the file picker but does not analyze the image. Voice input is a placeholder, and the contact form displays a local confirmation without sending the message to a service.

There are no external API calls or environment variables to configure.