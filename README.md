# Plant Manager 🌱

A comprehensive home plant management application built with React, TypeScript, and Vite. Keep track of your green friends, never miss a watering, and become a better plant parent with personalized care tips and reminders.

## 🌿 Features

### Plant Collection Management
- **Plant Inventory**: Add, edit, and organize your plant collection with detailed profiles
- **Plant Identification**: Track plant names (common and scientific), species, and varieties
- **Photo Gallery**: Upload and manage photos of your plants to track their growth
- **AI Plant Scan**: Take or upload a photo and let ChatGPT suggest the plant name
- **Plant Categories**: Organize plants by type (houseplants, succulents, herbs, etc.)

### Care Scheduling & Reminders
- **Watering Schedule**: Set custom watering frequencies and get timely reminders
- **Care Calendar**: Visual calendar showing upcoming watering and care tasks
- **Care History**: Track when you last watered, fertilized, or repotted each plant
- **Smart Notifications**: Receive reminders based on plant-specific needs

### Location & Environment Tracking
- **Room Mapping**: Track where each plant is located in your home
- **Light Conditions**: Monitor and record light requirements and actual conditions
- **Environmental Notes**: Record temperature, humidity, and other environmental factors
- **Location History**: Keep track of plant relocations and their effects

### Plant Care Intelligence
- **Personalized Tips**: Get care recommendations based on your specific plants
- **Seasonal Care**: Receive season-specific care advice and adjustments
- **Problem Diagnosis**: Common plant problems and solutions database
- **Growth Tracking**: Monitor and celebrate your plants' growth milestones

### Analytics & Insights
- **Care Statistics**: View your plant care patterns and consistency
- **Plant Health Dashboard**: Overview of all your plants' current status
- **Success Metrics**: Track which plants are thriving and which need attention
- **Care Streak**: Gamify your plant care with streak tracking

## 🚀 Technical Features

- Modern React 18 with TypeScript for type safety
- Fast development with Vite and Hot Module Replacement (HMR)
- Responsive design for desktop and mobile use
- Local storage for offline functionality
- ESLint configuration for code quality

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Firebase Integration

This project uses Firebase for authentication and data storage. Create a `.env` file at the project root with your Firebase settings:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

To enable plant identification when scanning photos, create a ChatGPT API key and add it to the `.env` file:

```bash
VITE_OPENAI_API_KEY=your_openai_key
```

The `useFirestore` hook in `src/hooks/useFirestore.ts` provides simple `get`, `post` and `put` helpers for interacting with Cloud Firestore collections.

Uploaded plant photos are saved in Firebase Storage using the `useStorage` hook in `src/hooks/useStorage.ts` so images remain available when you revisit your plants.

New users can register via the **Create Account** page, accessible from the login screen. Registration uses Firebase Authentication with email and password.
