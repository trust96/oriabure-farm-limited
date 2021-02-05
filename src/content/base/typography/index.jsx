import React from 'react';
import Type from './style';


export default function Typography({ children, variant, color, weight, className,as,margin,lineheight, transform}) {
    return (
        <Type variant={variant} color={color} weight={weight} className={className} as={as} margin={margin} lineheight={lineheight} transform={transform}>
            {children}
        </Type>
    );
}
