import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDxPJvql8GGrNO4Hf0-jZ5ZRIJtG-cy4wY",
    authDomain: "oriabure-farms-limited.firebaseapp.com",
    projectId: "oriabure-farms-limited",
    storageBucket: "oriabure-farms-limited.appspot.com",
    messagingSenderId: "500542830491",
    appId: "1:500542830491:web:3b10e12d9449adbe29133e",
    measurementId: "G-3WH8D6YSCM"
  };

  const fb = firebase.initializeApp(firebaseConfig);

  export default fb;