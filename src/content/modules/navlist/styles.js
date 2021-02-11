import styled from "styled-components";

export const List = styled.ul`
padding:0;
margin:0;
background-color:${({color})=>{
    switch(color){
        case 'primary':
            return 'var(--primary-300)';
        default:
            return 'var(--white)'
    }
}};
color:${({color})=>{
    switch(color){
        case 'primary':
            return 'var(--white)';
        default:
            return 'var(--primary-300)'
    }
}};
`;

export const ListItem = styled.li`

display:${({mobile})=>mobile?'flex':'inline-block'};


`;

export const ListLink = styled.a`
color:inherit;
text-decoration:none;
text-transform:capitalize;
cursor:pointer;
display:${({mobile})=>mobile?'flex':'inline-block'};
flex-basis:100%;
justify-content:center;
align-items:center;
padding:${({mobile})=>mobile?'var(--space-500) var(--space-400)':'var(--space-200) var(--space-300)'} ;

&:hover{
    background-color: ${({mobile})=>mobile? 'rgba(0,0,0,0.1)':''};
    color:var(--primary-400)
}
`;

export const Indicator = styled.span `

background-color:var(--primary-300);
display:block;
height:5px;
position:absolute;
transition: all linear 150ms;
border-radius:var(--border-radius-lg);
bottom:0;
`