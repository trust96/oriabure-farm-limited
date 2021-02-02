import React from 'react';
import Type from './style';


export default function Typography({ children, variant, color, weight }) {
    return (
        <Type variant={variant} color={color} weight={weight}>
            {children}
        </Type>
    );
}
