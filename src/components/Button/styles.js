
import styled, { css} from "styled-components";

const btn = css`
border: 3px solid #ffffff;
color: #ffffff;
background-color: transparent;
border-radius: 30px;
padding: 10px 20px;
font-size:20px;
font-weight: 600;
cursor: pointer;
gap: 10px;

&:hover{ 
    background-color: #ffffff;
    color: red;
    transition: 0.3s;
}
`

export const ButtonWhite = styled.button`
${btn}
`
export const ButtonRed = styled.button`
${btn}
background-color: red;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 7px rgb(255 0 0 / 20%);
 
 &:hover{
    box-shadow: 0px 0px 7px 10px rgb(255 0 0 / 40%);
    background-color: red;
    color:#ffffff;
    transition: 0.5s;
 }
`