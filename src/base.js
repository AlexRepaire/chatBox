import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_hTGBLcsVMODIZ7CEHljJIU1j0TbXwic",
    authDomain: "chatbox-fc03a.firebaseapp.com",
    databaseURL: "https://chatbox-fc03a.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base