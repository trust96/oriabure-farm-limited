import { useRouter } from 'next/router'
import React from 'react'
import Button from '../content/components/button'
import Head from '../content/sections/head'
import { signOut } from '../utils/auth/auth'

export default function report() {
    const router=useRouter();
    const handleSignOut =()=>{
        signOut();
        router.push('/signin')
    }
    return (
        <>
        <Head>report</Head>
           this is report 
           <Button onClick={handleSignOut} variant="primary">sign out</Button>
        </>
    )
}
