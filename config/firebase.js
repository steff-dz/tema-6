import firebase from 'firebase'
import 'firebase/auth'

//if (!firebase.app.length) {

if (typeof window !== 'undefined' && !firebase.apps.length) {
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
    console.log('app initalized from firebase config')
    firebase.auth().setPersistance(firebase.auth.Auth.Persistance.SESSION)
  } catch (error) {
    console.log(error, 'from firebase config')
  }
}

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

// try {
//   firebase.initializeApp(firebaseConfig)
//   console.log('app is on')
//   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
// } catch (error) {
//   console.log(error, 'from firebaseconfig')
// }
// }

const firebaseInstance = firebase
//firebase.auth().setPersistence(firebaseInstance.auth.Auth.Persistance.SESSION)
export default firebaseInstance
