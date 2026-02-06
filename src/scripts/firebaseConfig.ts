/**
 * Firebase configuration for Node.js scripts
 * Uses dotenv to load environment variables
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables from .env file
// Try multiple possible locations
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Script is in src/scripts, so go up two levels to get to root
const rootDir = path.resolve(__dirname, '../..');

// Try root directory first, then src directory
const envPaths = [
  path.join(rootDir, '.env'),
  path.join(rootDir, 'src', '.env'),
];

let envLoaded = false;
for (const envPath of envPaths) {
  try {
    const result = dotenv.config({ path: envPath, debug: false });
    if (!result.error && Object.keys(result.parsed || {}).length > 0) {
      envLoaded = true;
      console.log(`📄 Loaded .env from: ${envPath}`);
      console.log(`   Found ${Object.keys(result.parsed || {}).length} environment variables`);
      break;
    }
  } catch (err) {
    // Continue to next path
  }
}

if (!envLoaded) {
  console.warn('⚠️  Warning: .env file not found or empty. Trying to use environment variables directly.');
  console.warn(`   Checked paths: ${envPaths.join(', ')}`);
}

// Helper function to clean environment variable values (remove quotes)
const cleanEnvVar = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  // Remove surrounding quotes if present
  return value.replace(/^["']|["']$/g, '');
};

// Firebase configuration
const firebaseConfig = {
  apiKey: cleanEnvVar(process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY),
  authDomain: cleanEnvVar(process.env.VITE_FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN),
  projectId: cleanEnvVar(process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID),
  storageBucket: cleanEnvVar(process.env.VITE_FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET),
  messagingSenderId: cleanEnvVar(process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID),
  appId: cleanEnvVar(process.env.VITE_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID),
};

// Debug: Show what we found
console.log('\n🔍 Checking Firebase configuration...');
console.log(`API Key: ${firebaseConfig.apiKey ? '✅ Found' : '❌ Missing'}`);
console.log(`Project ID: ${firebaseConfig.projectId ? '✅ Found' : '❌ Missing'}`);
console.log(`Auth Domain: ${firebaseConfig.authDomain ? '✅ Found' : '❌ Missing'}\n`);

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('\n❌ Error: Firebase configuration is missing!');
  console.error('\nPlease ensure your .env file contains:');
  console.error('  VITE_FIREBASE_API_KEY=your-api-key');
  console.error('  VITE_FIREBASE_PROJECT_ID=your-project-id');
  console.error('  VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain');
  console.error('  VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket');
  console.error('  VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id');
  console.error('  VITE_FIREBASE_APP_ID=your-app-id');
  console.error('\nThe .env file should be in the project root directory.');
  throw new Error('Firebase configuration is missing. Please check your .env file.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export default app;
