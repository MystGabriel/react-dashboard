import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "dashboard-e311e.firebaseapp.com",
  projectId: "dashboard-e311e",
  storageBucket: "dashboard-e311e.appspot.com",
  messagingSenderId: "109799470869",
  appId: "1:109799470869:web:d26040d2be0c68d7f21b1c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
