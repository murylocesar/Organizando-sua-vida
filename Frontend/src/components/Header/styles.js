import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:70px;
    background:#20295F;
    border-bottom: 5px solid #FF7F00;

    display:flex;
    
`
export const LeftSide = styled.div`
    width:50%;
    height:100%;

    display:flex;
    align-items:center;
    padding-left:15px;

    img {
        width:100px;
        height:50px;
    }
`
export const RightSide = styled.div`
    width:50%;
    height:100%;
    
    display:flex;
    align-items:center;

    justify-content:flex-end;

    a, button{
        color:#FFF;
        font-weight:bold;
        text-decoration:none;
        margin:0 10px;

        &:hover{
            color:#FF7F00;
        }
    }
    #notification{
        
        background: none;
        border: none;
        cursor: pointer;


        img{
            width:25px;
            height:30px;
        }
        span {
            background: #FFF;
            color: #FF7F00;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top:-20px;
            right:10px;         
        }
        &:hover {
            opacity: 0.5;
        }
    }
    .dividir::after {
        content: "|";
        margin: 0 10px 0 10px;
        color: #FFF;

    }
    button {
        background:none;
        border:none;
        cursor:pointer;
        font-size:18px;
    }
`