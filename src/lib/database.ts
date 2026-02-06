import { db } from './firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp?: Date;
}

export interface PortfolioData {
  id?: string;
  [key: string]: any;
}

// Contact form submissions collection
const CONTACT_COLLECTION = 'contactSubmissions';
const PORTFOLIO_COLLECTION = 'portfolioData';

/**
 * Save a contact form submission to the database
 */
export async function saveContactSubmission(data: ContactSubmission): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
      ...data,
      timestamp: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }
}

/**
 * Get all contact form submissions
 */
export async function getContactSubmissions(): Promise<(ContactSubmission & { id: string })[]> {
  try {
    const q = query(collection(db, CONTACT_COLLECTION), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp?.toDate(),
    })) as (ContactSubmission & { id: string })[];
  } catch (error) {
    console.error('Error getting contact submissions:', error);
    throw error;
  }
}

/**
 * Save portfolio data
 */
export async function savePortfolioData(data: PortfolioData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, PORTFOLIO_COLLECTION), {
      ...data,
      timestamp: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving portfolio data:', error);
    throw error;
  }
}

/**
 * Get all portfolio data
 */
export async function getPortfolioData(): Promise<PortfolioData[]> {
  try {
    const querySnapshot = await getDocs(collection(db, PORTFOLIO_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting portfolio data:', error);
    throw error;
  }
}
