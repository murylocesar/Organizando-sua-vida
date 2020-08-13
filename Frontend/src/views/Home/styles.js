import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    
`

export const FilterArea = styled.div`
    width:100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    margin-top:30px;

    justify-content: right;

    button {
        background: none;
        border: 0;
        
    }
    
`
export const Content = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
    a {
        text-decoration: none;
        color: #000;
    }
    
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    h3{
        color: #20295F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding:0 20px;
    }
    
`