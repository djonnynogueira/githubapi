import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    input{
        border: 1px solid #000;
        border-radius: 4px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: bold;
    }
    button{
        background-color: #225ed9;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 7px;
        font-weight: bold;
        font-size: 16px;

        &:hover{
            background-color: #225ed9;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);
        }
        span{
            color: #ffff;
            font-weight: bold;
        }
    }
`