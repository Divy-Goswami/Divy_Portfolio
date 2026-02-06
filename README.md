# Divy Goswami - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features Firebase integration for storing contact form submissions and portfolio data.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Fully mobile-responsive
- 🔥 Firebase Firestore integration for data storage
- 📧 Contact form with database storage
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 🌈 Beautiful UI components with Radix UI

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Firebase** - Database and backend services
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account (for database functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Divy-Goswami/Divy_Portfolio.git
cd Divy_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:

   a. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   
   b. Enable Firestore Database in your Firebase project
   
   c. Create a `.env` file in the root directory with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```
   
   d. Get your Firebase config from Project Settings > General > Your apps > Web app config
   
   e. **Initialize the database** (run this once after setting up Firebase):
   ```bash
   npm run init-db
   ```
   This will create the necessary Firestore collections (`contactSubmissions` and `portfolioData`).

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Firebase Setup

### ✅ Firebase Credentials Configured

Firebase credentials have been set up in the `.env` file. The application is ready to connect to your Firebase project.

**Current Firebase Project:** `divy-portfolio-fdac5`

### Initialize Database

After setting up Firebase credentials, run the initialization script to create the database collections:

```bash
npm run init-db
```

This will:
- Create the `contactSubmissions` collection for storing contact form data
- Create the `portfolioData` collection for storing portfolio information
- Set up the initial database structure

### Firestore Database Rules

**⚠️ Important:** Before running `npm run init-db`, you need to configure Firestore security rules.

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `divy-portfolio-fdac5`
3. Navigate to **Firestore Database** > **Rules**
4. Update the rules to allow read/write (for development):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactSubmissions/{document=**} {
      allow read, write: if true; // Change this for production!
    }
    match /portfolioData/{document=**} {
      allow read, write: if true; // Change this for production!
    }
  }
}
```

5. Click **Publish** to save the rules
6. Then run `npm run init-db` to initialize the database

**Security Note:** The rules above allow public read/write access. For production, implement proper authentication and authorization rules to secure your database!

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and Firebase config
│   │   ├── firebase.ts # Firebase initialization
│   │   ├── database.ts # Database functions
│   │   └── utils.ts    # Utility functions
│   └── sections/       # Page sections
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       └── Projects.tsx
├── .env                # Environment variables (not committed)
├── .gitignore
├── package.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run init-db` - Initialize Firebase database collections (run once after setting up Firebase)

## Database Functions

The project includes database functions in `src/lib/database.ts`:

- `saveContactSubmission()` - Save contact form submissions
- `getContactSubmissions()` - Retrieve all contact submissions
- `savePortfolioData()` - Save portfolio data
- `getPortfolioData()` - Retrieve portfolio data

## Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set environment variables in the deployment platform
3. Deploy!

## License

This project is private and proprietary.

## Contact

- **Email:** divyg050@gmail.com
- **GitHub:** [@Divy-Goswami](https://github.com/Divy-Goswami)
- **LinkedIn:** [divygoswami](https://linkedin.com/in/divygoswami)

---

Built with ❤️ by Divy Goswami
