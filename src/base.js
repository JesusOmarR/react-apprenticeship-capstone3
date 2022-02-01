import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBlr5Q0wP_yL9FO12Dv-LFZId-6e8ZFgXs',
  authDomain: 'capstone3-31168.firebaseapp.com',
  projectId: 'capstone3-31168',
  storageBucket: 'capstone3-31168.appspot.com',
  messagingSenderId: '462633002014',
  appId: '1:462633002014:web:ba11041ab0c7aaeec67a0f',
})

export const auth = getAuth(app)
export default app
