import styled from 'styled-components';

export const Container = styled.div`
     
    width:250px;
    height: 60px;
    border-radius: 5px;

    background: ${props => props.actived ? '#FF7F00' : '#20295F'};
    
    display: flex;
    
    padding:10px;

    
    cursor:pointer;

    img{
        width: 25px;
        height:20px;
    }
    span {
        color:#FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
    }
    &:hover{
     background:#FF7F00;   
    } 


`