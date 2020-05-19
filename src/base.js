import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAX-sbjvtVfQ3AQu9L8GaWmgaE6eKeoxDw",
    authDomain: "reactjs-da9e0.firebaseapp.com",
    databaseURL: "https://reactjs-da9e0.firebaseio.com",
    projectId: "reactjs-da9e0",
    storageBucket: "reactjs-da9e0.appspot.com",
    messagingSenderId: "616484263920"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}
  
export const auth = firebaseApp.auth()
export default base