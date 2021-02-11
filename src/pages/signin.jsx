import React,{useContext, useEffect,useState} from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Typography from "../content/base/typography";
import Button from "../content/components/button";
import Input from "../content/modules/form/Input";
import Head from "../content/sections/head";
import signin, { useAuth } from "../utils/auth/auth";
import { AuthContext } from "../utils/state_management/global_context";
import {useRouter} from 'next/router';

const S = {};

S.Signin = styled.section`
`;
S.Form = styled(Form) `
max-width:350px;

`
export default function index() {
const [email,setEmail] = useContext(AuthContext).email;
const [password,setPassword] = useContext(AuthContext).password;
const [logSuccess, setLogSuccess] = useState(true)
const router = useRouter();
const [isLogin,user] =useAuth();

const handleEmail =(e)=>{
setEmail(e.target.value);

}
const handlePassword =(e)=>{
  setPassword(e.target.value);
}
const handleSubmit= (e)=>{
  e.preventDefault();
  signin(email, password);
  if (isLogin){

(user.uid === "3unWaKCfjaMEp9NOB4AIfhX9Jin2")?
  router.push('/admin'):
  router.push('/report')}


else{
router.push('/signin');
setLogSuccess(false)
}
}
  return (
    <>
    <Head>sign in</Head>
    
    <S.Signin>
      <Typography color="primary" className="mb-5" as="h2" center="true" variant="terziary" margin="lg">Welcome back to oriabure farms limited</Typography>

      <Typography as="p" center="true" variant="body1" margin="lg">please <strong>sign in</strong> and submit your report</Typography>
      <div className="container">
        <div className="row justify-content-center align-items-center">
        <S.Form onSubmit={handleSubmit} className="">
        <Typography variant="caption" color="danger" as="p" margin="sm" style={{display:`${!logSuccess? 'block': 'none'}`}}>your username or your password is incorrect, please try again</Typography>

<Input type="text" onChange={handleEmail}>Username</Input>
<Input type="password" onChange={handlePassword} >Password</Input>
          <Button fullwidth="true" variant="primary">sign in</Button>

        </S.Form></div>
      </div>
    </S.Signin>
    </>
  );
}
