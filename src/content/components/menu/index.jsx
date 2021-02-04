import React,{useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { NavToggle } from '../../../utils/state_management/store/nav-context';

const Menucontent = styled.button `
width:52px;
background-color:transparent;
border: 1px solid transparent;
padding:8px;
cursor: pointer;
&:focus{
    border: 1px solid var(--primary-300);
    outline:none;
}
`;

const Menuitem = styled.div `
width:100%;
height:4px;
background-color:var(--primary-300);
transition: all linear 150ms;
&:not(:last-child){
    margin-bottom:4px;
}
&.top{
transform:translateY(8px) rotate(45deg);
transition: all linear 150ms;
}
&.center{
    opacity:0;
    transition: all linear 150ms;
}
&.bottom{
    transform: translateY(-8px) rotate(-45deg);
    transition: all linear 150ms;
}
`
export default function Menu({className}) {
    const [isToggle,setIsToggle]= useContext(NavToggle)
    const handleNav = ()=>{
        setIsToggle((prevstate)=>!prevstate)

    }
useEffect(()=>console.log(isToggle))
    return (
        <Menucontent className={className} onClick={handleNav}>
            <Menuitem className={`${isToggle && 'top'}`}/>
            <Menuitem className={`${isToggle && 'center'}`}/>
            <Menuitem className={`${isToggle && 'bottom'}`}/>
        </Menucontent>
    )
}
