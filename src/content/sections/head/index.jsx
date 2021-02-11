import React from 'react'
import styled from 'styled-components';
import Typography from '../../base/typography';
const S={};
S.Head = styled.section `
background-color:var(--primary-400);
padding-top: 70px;
height:230px;
color:var(--white);
display:flex;
justify-content:center;
align-items:center;

& h1{

    &::after{
        content:'';
        display:block;
        height:5px;
        width:100%;
        background-color:var(--white);
        transform:translateY(8px);
    }
}

`
export default function Head({children}) {
    return (
        <S.Head className="mb-5">
        <Typography variant="primary" as="h1" className="m-0" weight="normal" >{children}</Typography> 
        </S.Head>
    )
}
