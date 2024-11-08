# research_lab

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
Project Structure
This project is organized into well-defined folders to ensure modularity and reusability. Below is an overview of the structure:

Research_Lab/
├── public/                  # Public assets (favicon, shared images)
├── src/
│   ├── assets/              # Static assets (images, global styles)
│   ├── components/          # Reusable Vue components
│   │   ├── common/          # Generic components (buttons, forms, etc.)
│   │   └── layout/          # Layout components (Header, Footer, Sidebar)
│   ├── composables/         # Reusable functions (hooks, Firebase utils)
│   ├── layouts/             # Page templates (main layout, dashboard layout)
│   ├── modules/             # Modules for each section (e.g., team, publications)
│   │   ├── team/            # Pages and components related to the research team
│   │   └── publications/    # Pages and components for publications
│   ├── router/              # Router configuration
│   │   └── index.js
│   ├── services/            # Firebase and other API services
│   │   └── firebase.js      # Firebase configuration and services (auth, database)
│   ├── store/               # Global state management (Pinia or Vuex)
│   ├── styles/              # Global stylesheet files
│   ├── views/               # Main views (full pages)
│   ├── App.vue              # Root component of the application
│   └── main.js              # Main entry point for the Vue.js app
├── .env                     # Environment variables (Firebase config)
├── .gitignore               # Ignore sensitive files
└── package.json             # Project dependencies and scripts

## Folder Explanations
components/common/: Contains reusable components, such as standard buttons and form fields, used across multiple views.
components/layout/: Components for structuring the layout of pages, like Header.vue, Footer.vue, and Sidebar.vue.
composables/: Houses custom hooks (e.g., Firebase authentication functions) for reuse across components.
modules/: Each main section of the site is structured as a module, making it easier to navigate and maintain.
services/firebase.js: This file initializes Firebase using configuration variables stored in .env, and sets up services like authentication and database access.
store/: Configuration for Pinia or Vuex, enabling global state management (e.g., user authentication status).
views/: Contains the main pages, each implementing one or more components from the modules directory