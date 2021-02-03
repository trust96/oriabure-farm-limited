import React from 'react'
import Navlist from '../navlist'


const navText = ['home', 'about us', 'services','contact us'];
export default function Navbar() {

    return (
        <>
        
           <Navlist mobile navText={navText}/> 
        </>
    )
}
