import React from 'react'
import styled from 'styled-components';
import Typography from '../../base/typography';
const S={};
S.Card = styled.div `
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
background-color:var(--gray-200);
border-radius:var(--border-radius-sm);
display:flex;
flex-direction:column;
min-width:250px;
max-width:300px;
align-items:center;
padding:2rem 1rem;
`
S.Image = styled.div `
margin-bottom:.75rem;

`
S.Wrapper = styled.div `


`
export default function Cards({image,name,title,children, className}) {
    return (
        <>
            <S.Card className={`${className}`}>
                <S.Image>
                    <img className="img-fluid rounded-circle" src={`/Assets/${image}`} alt=""/>
                </S.Image>
                <S.Wrapper>
<Typography center="true" variant="body1" as="h3" margin="sm">{name}</Typography>
<Typography center="true" variant="body1" as="h3" color="subtle" margin="md">{title}</Typography>
<Typography variant="body2" as="p" className="m-0">{children}</Typography>
                </S.Wrapper>
            </S.Card>
        </>
    )
}
