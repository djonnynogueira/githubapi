import styled from "styled-components"

export const Wrapper = styled.div `
    display: flex;
    border: 1px solid #000;
    align-items: flex-start;
    //background-color: red;
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    border: 1px solid #222222;
    align-items: center;
    // background-color: yellow;
    div{
        margin: 10px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div `
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3{
        margin-right: 8px;
    };
    a{
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
    color: white;
`;

export const WrapperInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 10px;
    h1{
        font-size: 32px;
        font-weight: bold;
    }
    h3{
        margin-right: 10px;
        font-size: 18px;
        font-weight: bold;
    };
    h4{
        font-size: 16px;
        font-weight: bold;
    };

`;

export const WrapperImage = styled.img `
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 10px;
`;