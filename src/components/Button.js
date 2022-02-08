import styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
        background-color: ${(props) => props.hoverColor || "lightBlue"};
        cursor: pointer;
    }
`


export default Button