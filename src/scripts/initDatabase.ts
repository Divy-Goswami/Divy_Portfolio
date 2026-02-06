/**
 * Database Initialization Script
 * 
 * This script initializes the Firestore database collections.
 * Run this script once to set up the database structure.
 * 
 * Usage: npm run init-db
 */

import { db } from './firebaseConfig';
import { collection, doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';

const COLLECTIONS = {
  CONTACT_SUBMISSIONS: 'contactSubmissions',
  PORTFOLIO_DATA: 'portfolioData',
};

/**
 * Initialize database collections with initial structure
 */
async function initializeDatabase() {
  try {
    console.log('🔥 Initializing Firebase database...\n');

    // Check if collections exist by trying to read them
    const contactCollection = collection(db, COLLECTIONS.CONTACT_SUBMISSIONS);
    const portfolioCollection = collection(db, COLLECTIONS.PORTFOLIO_DATA);

    console.log('✅ Database collections initialized:');
    console.log(`   - ${COLLECTIONS.CONTACT_SUBMISSIONS}`);
    console.log(`   - ${COLLECTIONS.PORTFOLIO_DATA}\n`);

    // Create a sample document to ensure collections are created
    const sampleContactDoc = doc(contactCollection, 'sample');
    const samplePortfolioDoc = doc(portfolioCollection, 'sample');

    // Check if sample documents exist
    const contactDocSnap = await getDoc(sampleContactDoc);
    const portfolioDocSnap = await getDoc(samplePortfolioDoc);

    if (!contactDocSnap.exists()) {
      await setDoc(sampleContactDoc, {
        name: 'Sample',
        email: 'sample@example.com',
        message: 'This is a sample document. You can delete this.',
        timestamp: Timestamp.now(),
      });
      console.log('📝 Created sample document in contactSubmissions');
    }

    if (!portfolioDocSnap.exists()) {
      await setDoc(samplePortfolioDoc, {
        type: 'sample',
        data: 'This is a sample document. You can delete this.',
        timestamp: Timestamp.now(),
      });
      console.log('📝 Created sample document in portfolioData');
    }

    console.log('\n✅ Database initialization complete!');
    console.log('\n📋 Next steps:');
    console.log('   1. Go to Firebase Console > Firestore Database');
    console.log('   2. Review the collections: contactSubmissions and portfolioData');
    console.log('   3. Delete the sample documents if desired');
    console.log('   4. Set up Firestore security rules (see README.md)');
    console.log('\n🎉 Your database is ready to use!');

  } catch (error: any) {
    if (error?.code === 'permission-denied') {
      console.error('\n❌ Permission Denied Error');
      console.error('\nThis means Firebase is connected, but Firestore security rules need to be configured.');
      console.error('\n📋 To fix this:');
      console.error('   1. Go to Firebase Console: https://console.firebase.google.com/');
      console.error('   2. Select your project: divy-portfolio-fdac5');
      console.error('   3. Navigate to Firestore Database > Rules');
      console.error('   4. Update the rules to allow read/write (for development):');
      console.error('\n   rules_version = \'2\';');
      console.error('   service cloud.firestore {');
      console.error('     match /databases/{database}/documents {');
      console.error('       match /contactSubmissions/{document=**} {');
      console.error('         allow read, write: if true;');
      console.error('       }');
      console.error('       match /portfolioData/{document=**} {');
      console.error('         allow read, write: if true;');
      console.error('       }');
      console.error('     }');
      console.error('   }');
      console.error('\n   ⚠️  Note: These rules allow public access. Update for production!');
      console.error('\n   5. Click "Publish" to save the rules');
      console.error('   6. Run this script again: npm run init-db');
    } else {
      console.error('❌ Error initializing database:', error);
      console.error('\nPlease check:');
      console.error('   1. Firebase credentials are set in .env file');
      console.error('   2. Firestore Database is enabled in Firebase Console');
      console.error('   3. Firestore security rules allow read/write');
    }
    process.exit(1);
  }
}

// Run initialization
initializeDatabase()
  .then(() => {
    console.log('\n✨ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
