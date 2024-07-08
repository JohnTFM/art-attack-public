import styled from 'styled-components';

export const Button = styled.button`
    padding: 16px;
    outline: none;
    border: none;
    width: ${props => props.widthh || '100%'};
    cursor: pointer;
    background-color: ${props => props.disabled ? '#C1C7CD' : '#0F62FE'};
    color: ${props => props.disabled ? 'white' : 'white'};
    font-weight: 600;
    font-size: 16px;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

