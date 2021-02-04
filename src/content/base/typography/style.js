import styled from "styled-components";

const Type = styled.span`
    font-size: ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'var(--font-size-100)';
            case 'secondary':
                return 'var(--font-size-200)';
            case 'terziary':
                return 'var(--font-size-300)';
            case 'quartenary':
                return 'var(--font-size-400)';
            case 'subtitle':
                return 'var(--font-size-500)';
            case 'body1':
                return 'var(--font-size-600)';
            case 'body2':
                return 'var(--font-size-700)';
            case 'caption':
                return 'var(--font-size-800)';
            case 'overline':
                return 'var(--font-size-900)';
        }
    }};
    text-shadow: ${({ variant }) =>
        variant === 'primary' && '2px 4px 3px rgba(0,0,0,0.3)'};
    color: ${({ color }) => {
        switch (color) {
            case 'primary':
                return 'var(--primary-300)';
            case 'secondary':
                return 'var(--gray-600)';
            case 'danger':
                return 'var(--danger-300)';
            case 'success':
                return 'var(--success-300)';
            case 'warning':
                return 'var(--warning-300)';
        }
    }};
    text-transform: capitalize;
    line-height: var(--line-height-sm);
    font-weight: ${({ weight }) => {
        switch (weight) {
            case 'light':
                return 'var(--font-weight-light)';
            case 'normal':
                return 'var(--font-weight-normal)';
            case 'bold':
                return 'var(--font-weight-bold)';
        }
    }};
    margin:${({margin})=>{
              switch (margin) {
            case 'lg':
                return '0 0 .25rem 0';
            case 'md':
                return '0 0 .75rem 0';
            case 'sm':
                return '0 0 1.25rem 0';
        }  
    }}
`;

export default Type;