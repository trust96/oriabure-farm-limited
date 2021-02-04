import React from 'react'
import Footer from '../../sections/footer'
import Nav from '../../sections/nav/index'
export default function Layout({children}) {
    return (
        <>
            <Nav/>
            <main>
{children}
            </main>
            <Footer/>
        </>
    )
}
