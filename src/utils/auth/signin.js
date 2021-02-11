import { auth } from "./auth"

const signIn=(username, password)=>{
    const email=`${username}@domain.com`
    auth.signInWithEmailAndPassword(email,password).then(console.log(auth.currentUser))
}