import styled from "styled-components"

export const Wrapper = styled.div `
    display: flex;
    border: 1px solid #000;
    align-items: flex-start;
    background-color: red;
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    border: 1px solid #222222;
    align-items: center;
    // background-color: yellow;
`;

export const WrapperUsername = styled.div `
    display: flex;
    border: 1px solid #222222;
    align-items: center;
    background-color: blue;
    color: white;
`;

export const WrapperInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    margin-left: 10px;
    h3{
        margin-right: 10px;
    }
`;

export const WrapperImage = styled.img `
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 10px;
`;