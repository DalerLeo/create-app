import styled from 'styled-components'

const Button = styled.input`
    display: inline-block;
    max-width: 100%;

    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    text-overflow: ellipsis;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: none;
    transition: all .3s ease;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 1px;
    background-color: #000;
    color: #fff;
    padding: 16px 37px;
    border-style: solid;
    border-width: 1px;
    margin: 5px 0 0;
    :hover {
      background-color: #fff;
      color: #000;
      text-decoration: none;
    }
`

export default Button
