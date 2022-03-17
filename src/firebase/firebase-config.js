import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUHVcy5sQuVaMfNPhqrFM96J92jB832qc',
  authDomain: 'kpiform.firebaseapp.com',
  projectId: 'kpiform',
  storageBucket: 'kpiform.appspot.com',
  messagingSenderId: '1094615800627',
  appId: '1:1094615800627:web:78944c80ac2d66bb3afc46',
  measurementId: 'G-8FVHT515G7',
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);
