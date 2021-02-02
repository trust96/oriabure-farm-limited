import React from 'react';
import Btn from './style'
export default function Button({ children, variant }) {
    return <Btn variant={variant}>{children}</Btn>;
}
