import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components';
import Typography from '../../base/typography';
const S = {};
S.Group =styled(Form.Group) `

`

S.Label = styled(Form.Label) `

`

S.Control = styled(Form.Control) `
margin-bottom:1.25rem;
border-radius:var(--border-radius-md);
`
S.Typography = styled(Typography) `
margin-bottom:1.75rem;
`
export default function Input({className, children, type,onChange}) {
    return (
        <>
        <S.Group className={`${className}`}>
            <S.Label>{children}</S.Label>
            <S.Control onChange={onChange} type={type} />
          </S.Group>
        </>
    )
}
