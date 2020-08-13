import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;   
`
export const Form = styled.div`
    width:50%;
`
export const TypeIcones = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;

    img {
        width: 35px;
        height: 35px;
        margin: 10px;
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    } 
    .inative{
        opacity: 0.5;
    }  

    button {
        border: none;
        background: none;
    }
`
export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;

    span{
        color: #707070;
        margin: 5px 0px;
    }
    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
        
    }

`
export const DateTime = styled.div`
    width: 100%;
    display: flex;
    

`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;

    span{
        color: #707070;
        margin: 5px 0px;
    }
    
    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B26;
        border-bottom: 1px solid #EE6B26;
        
    }

`
export const Option = styled.div`
    
    display: flex;
    justify-content: space-between;
    button{
        font-weight: bold;
        color:#20295F;
        border: none;
        background: none;
        font-size: 18px;
        &:hover{
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight:bold;
        font-size: 18px;
        
    }
 

`
export const Save = styled.div`
    
    width: 100%;

    button{
        width: 100%;
        margin-top:20px;
        padding: 10px;

        border-radius: 20px;

        border: none;
        font-size: 20px;
        background: #EE6B26;
        color:#FFF;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
 

`
