import firebase from 'firebase/app'
import 'firebase/firestore'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyBRxh5l-Xl3AaMbarSRERlUsZe2zu2fSno",
    authDomain: "firethebase-dcc84.firebaseapp.com",
    databaseURL: "https://firethebase-dcc84.firebaseio.com",
    projectId: "firethebase-dcc84",
    storageBucket: "firethebase-dcc84.appspot.com",
    messagingSenderId: "30835903503"
  };
  firebase.initializeApp(config);//initialize firebase

  const db=firebase.firestore();//initialize firestore
  //db.settings({timestampsInSnapshots:true})//deals with recent firebase updates on timestamps to prevent errors from the console. 
  export default db; //exports the element to allow its usage in other components.