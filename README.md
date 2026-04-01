# Door Codes

A web app for storing and managing door codes for places you visit — like friends' apartments, offices, or gyms. Codes are sorted by proximity so the nearest one is always at the top.

## Background

This was a project built at **Hyper Island** as part of a React course. The goal was to learn React by building a real, full-stack app. The backend — including the REST API and database — was built during a previous course on backend development and APIs, and is reused here as the data layer.

## Planned Features

- **Google Maps API integration** — mark door codes on a map and automatically highlight codes near your current location

## Tech Stack

- **React 19** with React Router 7
- **Vite** — build tool and dev server
- **CSS Modules** — component-scoped styling
- **Custom REST API** — built with Node.js/Express (separate repo)

## Features

- User authentication with session cookies
- Add, edit, and delete door codes
- Proximity-based sorting — closest code is highlighted (fake data before I add Google Maps API)
- Responsive design

## Project Structure

```
src/
├── api/          # API calls (auth, codes, user)
├── context/      # Global state (AuthContext, UserContext)
├── hooks/        # Custom hooks (useFetchAPI)
└── components/
    ├── auth/     # Login, signup, protected routes
    ├── layout/   # App shell and navigation
    ├── pages/    # CodeList, ProfilePage, UserSettingsPage
    └── shared/   # Reusable UI components (Button, Modal, Form, etc.)
```

## Getting Started

```bash
npm install
npm run dev
```
