import styled from "styled-components"

export const Background = styled.div`
background-image: url(${(props) => props.img});
height: 100vh;
justify-content: center;
display: flex;
align-items: center;
background-size: cover;
background-position:center ;

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}


`
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 100%;
max-width: 1500px;


`
export const ContainerButtons = styled.div`
display: flex;
gap: 30px;
margin-top: 30px;
`
export const InfoMovie = styled.div`
z-index:2;
padding: 20px;
width: 50%;


h1{
    font-size: 5rem;
    color: #ffffff;
    font-weight: 700;
   
}
p{
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;

   
}
`
export const Poster = styled.div`
z-index: 2;
 img{
    width: 400px;
    border-radius: 30px;
 }
`