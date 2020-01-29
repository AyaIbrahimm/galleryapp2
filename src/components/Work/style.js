import styled from 'styled-components'

export const Worksection = styled.div` 
    height: auto;
    margin-top: 50px;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`

export const Worktitle= styled.h2 `
    font-size: 40px; 
    font-weight: bold;
    text-align: center
    
`

export const Span = styled.span`
    font-weight: normal
`

export const Workpart = styled.div`
    

    margin-top: 20px;
    width:30%;
    float: left;
    height: auto;
    padding:59px 43px;
    display: inline-block 
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: left;
    margin-left: 5%
    margin-left: ${props => props.first="1"? '0' :'5%'}
`


export const Icon =styled.i `
    color: #888;
    margin-bottom: 20px
`
export const Parttitle = styled.h4`
    
    font-size: 25px;
    font-weight: 900;
    color: #333333;
    margin-bottom: 20px;
    
`

export const Line1 = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const Partdesc = styled.p `
    
     color: #333333;
     padding: 35px 13px
     display: inline-block;
    float: none;
    font-weight: normal;
    font-size: 14px;
    font-family: "Lato", sans-serif;
   line-height: 1.428571429;;
    letter-spacing: 0.5px;
    text-align: left;
`
export const Images = styled.img`
    margin-top: 180px;
    width: 100px;
    height:100px

`