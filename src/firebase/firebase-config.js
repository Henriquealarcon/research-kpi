import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNQkli_eNdn5t3XYZEdUXhLbbjewkrJ0k',
  authDomain: 'kpi-project-4cfb8.firebaseapp.com',
  projectId: 'kpi-project-4cfb8',
  storageBucket: 'kpi-project-4cfb8.appspot.com',
  messagingSenderId: '1005815764260',
  appId: '1:1005815764260:web:87ee5b7a6834e58cbb8fb1',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
