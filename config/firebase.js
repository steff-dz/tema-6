import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

try {
  firebase.initializeApp(firebaseConfig)
  //firebase auth
  //Or is it firebaseConfig.auth.Auth.Persistence.SESSION??
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
} catch (error) {
  // if (!/already exists/.test(error.message)) {
  //   console.error('firebase error')
  // }
  console.log
}

const firebaseInstance = firebase
//firebase.auth().setPersistence(firebaseInstance.auth.Auth.Persistance.SESSION)
export default firebaseInstance
