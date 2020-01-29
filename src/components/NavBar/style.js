import styled from 'styled-components'
export const NavBarSec = styled.div`
    padding : 20px 40px;
    overflow : hidden;
    display: "flex";
  flexDirection: "row";
    background: #fff;
    position: relative;
  
    border-buttom: 1-px solid #000 
`
export const Logo = styled.div`
    width:20%;
    margin-left: 450px;
    float: left;
`
export const LogoText = styled.h2`
    font-size: 20px;
    font-weight: bold
`

export const ULlist = styled.ul`
    width:120%;
    font-size:20px;
    float:center;
    margin-top: 15px;
    margin-left:220px;
    list-style:none;
    padding:0;
    
`
export const ListItem=styled.li`
    display: inline-block;
    marginRight: 70px;
   
    
`
export const Anchor= styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #eb5424
    }

`

export const Line = styled.hr `
    
  border: 0.5px solid black;
  align: left;
  width:80%
    
  `

  export const Dropdown = styled.div`
    position: relative;
    height:450px;
    width:200px;
    display: inline-block;
    &:hover {
        
        >div {
            display: block;
        }
      }
  `
  
 
  export const DropdownContent= styled.div`
  display: none;
  position: absolute;
  
  background-color: #f9f9f9;
  min-width: 90px;
  
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  `
  
 
  export const DropdownAnchor = styled.a `
    color: black;
    padding: 5px 5px;
    text-decoration: none;
    display: block;
    font-weight: bold
 
  `
  
  
  
