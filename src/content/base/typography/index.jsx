import React from 'react';
import Type from './style';


export default function Typography({ children, variant, color, weight, className }) {
    return (
        <Type variant={variant} color={color} weight={weight} className={className}>
            {children}
        </Type>
    );
}
