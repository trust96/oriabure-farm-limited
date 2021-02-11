import {useState,useEffect} from 'react'
import firebase from '../firebase/firebase'
import 'firebase/auth'

const auth = firebase.auth();

const signin=( username, password)=>{
const email=`${username}@domain.com`
   auth.signInWithEmailAndPassword(email,password)
   
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


