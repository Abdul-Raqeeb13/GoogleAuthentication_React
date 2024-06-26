
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDAS3JUMWNyUo_AtrPDMUDpZWGsaKWNpcA",
    authDomain: "practice-6cfdc.firebaseapp.com",
    databaseURL: "https://practice-6cfdc-default-rtdb.firebaseio.com",
    projectId: "practice-6cfdc",
    storageBucket: "practice-6cfdc.appspot.com",
    messagingSenderId: "175627457677",
    appId: "1:175627457677:web:565403e309c4d633323ec4",
    measurementId: "G-8T45TZVVDS"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const database = firebase.database()

export default firebase