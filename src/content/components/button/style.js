import styled from 'styled-components';

const Btn = styled.button`
    border: 1px solid ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'transparent';

            case 'outline':
                return 'var(--primary-300)';
        }
    }};
    font-size: var(--font-size-700);
    text-transform: capitalize;
    font-family:inherit;
    border-radius: var(--border-radius-md);
    padding: 0.75rem 2.75rem;
    display: inline-block;
    cursor: pointer;
    background-color: ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'var(--primary-300)';

            case 'outline':
                return 'var(--white)';
        }
    }};
    color: ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'var(--white)';

            case 'outline':
                return 'var(--primary-300)';
        }
    }};

    &:hover {
        background-color:${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'var(--primary-400)';

            case 'outline':
                return 'var(--gray-200)';
        }
    }};
    }
    &:active {
       background-color: ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return 'var(--primary-200)';

            case 'outline':
                return 'var(--gray-100)';
        }
    }};
    }
    &:focus {
        outline: none;
    box-shadow: ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return ' 0 0 0px 2px white, 0 0 0px 3px var(--primary-300)';

            case 'outline':
                return ' 0 0 0px 2px white, 0 0 0px 3px var(--primary-300)';
        }
    }};
   
    }
`;

export default Btn