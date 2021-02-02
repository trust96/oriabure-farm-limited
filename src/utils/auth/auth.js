import fb from '../firebase/firebase'
const auth = fb.auth();
function signup(){
    auth.createUserWithEmailAndPassword()
}
