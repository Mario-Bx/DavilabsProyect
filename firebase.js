import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqgUTULA4L4yEDXTnzUVPpdFtK53-ItSE",
    authDomain: "davilabs-8e5ab.firebaseapp.com",
    databaseURL: "https://davilabs-8e5ab.firebaseio.com",
    projectId: "davilabs-8e5ab",
    storageBucket: "davilabs-8e5ab.appspot.com",
    messagingSenderId: "567987205239",
    appId: "1:567987205239:web:8762b3547cab2a479ec272",
    measurementId: "G-9FGRFS8K9D"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  export default firebase;