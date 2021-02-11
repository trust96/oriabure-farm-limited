import {useState,useEffect} from 'react'
import firebase from '../firebase/firebase'
import 'firebase/auth'

export const auth = firebase.auth();

const signin=( username, password)=>{
const email=`${username}@hotmail.it`
   auth.signInWithEmailAndPassword(email,password).then(console.log(auth.currentUser))
   
}
export const useAuth = ()=>{
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
       auth.onAuthStateChanged(function(user) {
            if (user){
                setIsLogin(true)
                setUser(user)
            } else {
                setIsLogin(false)
            }
          });
      
          

    });
      return [isLogin,user]
}
export const signOut =()=>{
    auth.signOut();
}
export default signin;


