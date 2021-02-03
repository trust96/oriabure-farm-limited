import firebase from '../firebase/firebase'
import 'firebase/auth'
const auth = firebase.auth();
const signup=( email, password)=>{
    auth.createUserWithEmailAndPassword(email,password)
    .then((current)=>console.log(current.user)).catch((err)=>console.log(err.message))
}

export default signup;


