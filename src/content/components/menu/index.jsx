import React,{useState} from 'react'
import styled from 'styled-components'

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
&:not(:last-child){
    margin-bottom:4px;
}
&.top{
transform:translateY(8px) rotate(45deg);
}
&.center{
    opacity:0;
}
&.bottom{
    transform: translateY(-8px) rotate(-45deg);
}
`
export default function Menu({}) {
    const [toggle, setToggle] = useState(false)
    return (
        <Menucontent >
            <Menuitem className={`${toggle && 'top'}`}/>
            <Menuitem className={`${toggle && 'center'}`}/>
            <Menuitem className={`${toggle && 'bottom'}`}/>
        </Menucontent>
    )
}
