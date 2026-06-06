# NöroNest Static Website

This repository contains the static landing page and informational website for NöroNest. It serves as the main entry point for users, researchers, and early adopters to learn about our AI-driven neuro-rehabilitation solutions.

## 🚀 Features

- **Responsive Design**: Modern, responsive UI built with semantic HTML5 and vanilla CSS.
- **Multilingual Support**: Built-in translation system for Turkish (TR) and English (EN) languages (handled in `index.js`).
- **Early Adopter Signups**: Fully integrated email collection form that posts directly to the live NöroNest Azure backend API (`https://noronest-python-api-prod.azurewebsites.net`).
- **Performance Optimized**: Zero heavy framework dependencies, ensuring maximum performance and SEO.

## 📁 Structure

- `index.html`: The main landing page.
- `index.js`: Handles interactivity, language toggling, and API form submissions.
- `styles.css`: Global styles and animations.
- `/public`: Contains images and static assets.
- `/about`, `/team`, `/products`, `/articles`: Sub-pages detailing specific aspects of NöroNest.

## 🔧 API Integration

The "Early Adopter" sign-up form automatically connects to the NöroNest FastAPI backend. 
When a user submits their email, it sends a JSON POST request to the `/api/v1/subscribers/subscribe` endpoint, saving the data securely to the Azure SQL Database.

## 🌐 Deployment

This static site can be deployed easily to Azure Static Web Apps, GitHub Pages, or any standard static hosting provider. The `staticwebapp.config.json` is provided for Azure routing.
