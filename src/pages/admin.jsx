import { useRouter } from 'next/router'
import React from 'react'
import Button from '../content/components/button'
import Head from '../content/sections/head'
import { signOut, useAuth } from '../utils/auth/auth'

export default function admin() {
    const router= useRouter();
    const handleSignOut =()=>{
        signOut();
        router.push('/signin')
    }
    return (
        <div>
            <Head>admin</Head>
            this is admin
            <Button onClick={handleSignOut} variant="primary">sign out</Button>
        </div>
    )
}
